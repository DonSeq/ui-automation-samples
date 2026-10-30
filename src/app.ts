import express, { NextFunction, Request, Response } from 'express';
import session from 'express-session';
import path from 'path';

export const DEMO_PASSWORD = 'illumina';

export const READ_TYPES = ['Single Read', 'Paired End'] as const;
export const READ_LENGTHS = ['75', '150', '300'] as const;
export const ANALYSIS_MODES = ['Onboard', 'Cloud'] as const;

export interface RunSetup {
  runName: string;
  readType: string;
  readLength: string;
  analysis: string;
}

declare module 'express-session' {
  interface SessionData {
    username?: string;
    setup?: RunSetup;
  }
}

const OPTIONS = { READ_TYPES, READ_LENGTHS, ANALYSIS_MODES };

// Nothing is pre-selected: the user must choose every option.
const DEFAULT_SETUP: RunSetup = { runName: '', readType: '', readLength: '', analysis: '' };

function requireLogin(req: Request, res: Response, next: NextFunction) {
  if (!req.session.username) return res.redirect('/login');
  next();
}

export function createApp() {
  const app = express();
  app.set('view engine', 'ejs');
  app.set('views', path.join(__dirname, '..', 'src', 'views'));

  app.use(express.static(path.join(__dirname, '..', 'public')));
  app.use(express.urlencoded({ extended: false }));
  app.use(session({ secret: 'demo-only-secret', resave: false, saveUninitialized: false }));
  app.use((req, res, next) => {
    res.locals.username = req.session.username;
    next();
  });

  app.get('/', (req, res) => res.redirect(req.session.username ? '/home' : '/login'));

  // ---- Login ----
  app.get('/login', (req, res) => {
    if (req.session.username) return res.redirect('/home');
    res.render('login', { error: null, enteredUsername: '', demoPassword: DEMO_PASSWORD });
  });

  app.post('/login', (req, res) => {
    const username = String(req.body.username ?? '').trim();
    const password = String(req.body.password ?? '');
    let error: string | null = null;
    if (!username || !password) error = 'Username and password are required.';
    else if (password !== DEMO_PASSWORD) error = 'Invalid username or password.';

    if (error) {
      return res
        .status(401)
        .render('login', { error, enteredUsername: username, demoPassword: DEMO_PASSWORD });
    }
    req.session.regenerate((err) => {
      if (err) return res.sendStatus(500);
      req.session.username = username;
      res.redirect('/home');
    });
  });

  app.post('/logout', (req, res) => {
    req.session.destroy(() => res.redirect('/login'));
  });

  // ---- Home ----
  app.get('/home', requireLogin, (_req, res) => res.render('home'));

  // ---- Run Setup ----
  // The page shell; the form itself lives in an <iframe> served from /setup/form.
  app.get('/setup', requireLogin, (_req, res) => res.render('setup'));

  app.get('/setup/form', requireLogin, (req, res) => {
    res.render('setup-form', { values: req.session.setup ?? DEFAULT_SETUP, errors: {}, options: OPTIONS });
  });

  app.post('/setup', requireLogin, (req, res) => {
    const values: RunSetup = {
      runName: String(req.body.runName ?? '').trim(),
      readType: String(req.body.readType ?? ''),
      readLength: String(req.body.readLength ?? ''),
      analysis: String(req.body.analysis ?? ''),
    };
    const errors: Record<string, string> = {};
    if (!values.runName) errors.runName = 'Run Name is required.';
    else if (!/^[A-Za-z0-9_-]{3,40}$/.test(values.runName))
      errors.runName = 'Run Name must be 3-40 characters: letters, numbers, - or _.';
    if (!(READ_TYPES as readonly string[]).includes(values.readType)) errors.readType = 'Select a read type.';
    if (!(READ_LENGTHS as readonly string[]).includes(values.readLength)) errors.readLength = 'Select a read length.';
    if (!(ANALYSIS_MODES as readonly string[]).includes(values.analysis)) errors.analysis = 'Select an analysis mode.';

    if (Object.keys(errors).length) {
      return res.status(400).render('setup-form', { values, errors, options: OPTIONS });
    }
    req.session.setup = values;
    // This response loads inside the iframe, so break out to the top-level window.
    res.send(
      '<!DOCTYPE html><title>Redirecting</title>' +
        '<script>window.top.location.href = "/review";</script>' +
        '<a href="/review" target="_top">Continue to review</a>',
    );
  });

  // ---- Review ----
  app.get('/review', requireLogin, (req, res) => {
    if (!req.session.setup) return res.redirect('/setup');
    res.render('review', { setup: req.session.setup });
  });

  // "Start" the run: clear the saved setup so the next run begins with a blank form.
  app.post('/review/confirm', requireLogin, (req, res) => {
    if (!req.session.setup) return res.sendStatus(409);
    delete req.session.setup;
    res.sendStatus(204);
  });

  return app;
}
