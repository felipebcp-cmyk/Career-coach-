# FBP Course LMS

A small self-hosted learning-management server for the course in
[`../fbp-course`](../fbp-course): **user accounts, server-side progress
tracking, auto-issued certificates with public verification, and an admin
dashboard** — the "custom LMS" option, kept in the spirit of the rest of this
repo: zero npm dependencies (Node 22+ built-ins only, storage via
`node:sqlite`).

## Run it

```bash
node lms/server.js
# → http://localhost:3000
```

| Env var      | Default           | Meaning                                        |
|--------------|-------------------|------------------------------------------------|
| `LMS_PORT`   | `3000`            | Port to listen on                              |
| `LMS_DB`     | `lms/lms.sqlite`  | SQLite database file (created on first run)    |
| `LMS_SECURE` | unset             | Set to `1` behind HTTPS to mark cookies Secure |

The server serves the course app itself at `/`, so it's one deployable: any
box with Node 22+ (a $5 VPS, Fly.io, Railway, a Raspberry Pi) runs the whole
platform.

## How it works

- **Accounts** — email + password (scrypt-hashed, per-user salt), HMAC-signed
  session cookies (HttpOnly, SameSite=Lax, 30 days). **The first account
  registered becomes the admin.**
- **Progress tracking** — the course app detects the LMS via `/api/health`.
  Signed-in learners' progress saves to the server (debounced, plus a
  `sendBeacon` flush when the tab closes); the account is the source of truth
  across devices. Without the LMS (or signed out) the app falls back to
  guest mode in `localStorage`, exactly as before. Guest progress made on a
  device is migrated up automatically on first sign-in.
- **Auto-certificates** — the server recomputes completion from the synced
  scores (using the same course content file the app uses) and issues a
  certificate with a unique code the moment the course is complete. The
  certificate page shows the code, and anyone can confirm it at
  **`/verify/<CODE>`** — no login needed.
- **Admin dashboard** — **`/admin`** (admins only): every student's progress
  %, lessons/workshops/quizzes, final-assessment status, certificate code and
  last-active date.

## API

| Method & path              | Auth   | Purpose                                  |
|----------------------------|--------|------------------------------------------|
| `GET /api/health`          | —      | LMS detection / liveness                 |
| `POST /api/register`       | —      | Create account (name, email, password 8+) |
| `POST /api/login`          | —      | Sign in                                  |
| `POST /api/logout`         | —      | Sign out                                 |
| `GET /api/me`              | cookie | Current user                             |
| `GET /api/progress`        | cookie | Fetch saved course state                 |
| `PUT /api/progress`        | cookie | Save state; auto-issues certificate on completion |
| `GET /api/certificate`     | cookie | Your certificate code + verify path      |
| `GET /verify/<code>`       | —      | Public verification page                 |
| `GET /api/admin/students`  | admin  | All students with progress summaries     |

## Tests

```bash
node lms/test/api.test.js    # 34 checks: auth, sessions, progress, certificates, admin
node lms/test/e2e-lms.js     # browser: register, sync, cross-device persistence (needs playwright)
```

## Honest limitations (v1)

- No password reset or email verification — an admin can't recover accounts
  yet; keep the SQLite file backed up.
- No rate limiting on login attempts.
- Quizzes are still scored client-side and synced, so the certificate attests
  completion of an open-book course, not proctored mastery (same as every
  self-serve LMS without proctoring).
- Single-process SQLite: right-sized for a team or a course cohort, not for
  thousands of concurrent users.
