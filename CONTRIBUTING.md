<p align="center">
  <img src="public/logo.svg" width="120" alt="Infinite Fusion Playground">
</p>

# Contributing to Infinite Fusion Playground

**This project is discontinued** (see the [README](README.md)), so it isn't actively accepting changes. This document is here in case it's ever revived, and for anyone with write access keeping it tidy.

Questions: [hello@stuxie.dev](mailto:hello@stuxie.dev).

## Local setup

```
git clone https://github.com/StuxieDev/pokefusion.git
cd pokefusion
./dev-server.sh
```

Requires Node 20. `dev-server.sh` (or `dev-server.bat` on Windows) installs dependencies if needed and runs Vite on `https://localhost:3000` with a self-signed certificate. It forces dev mode on, which shows a dev-only banner. Pass `--no-dev-mode` to test production behaviour, or a port number to change the port. Sprite and API base URLs come from `.env` (template in `.env.template`).

## Before committing

- `npm run lint`, `npm run ts-validate`, and `npm run format-validate` should all pass. `.github/workflows/validate.yml` runs `scripts/ci.sh` on pull requests into `main`
- There's no automated test suite. Run the app and click through what you changed

## Legal pages

Content for all six legal pages is in `src/components/content/Legal/legalDocs.tsx`. Keep it in sync with what the app actually does: if it starts storing something new, calling a new third-party service, or adds analytics, update the Privacy, Cookies, and Opt-Out pages to match. When changing them, also update `LEGAL_UPDATED`.

## Versioning and changelog

- The version lives in `VERSION.md` (a bare version string). Bump it on every release
- Every release gets a `CHANGELOG.md` entry using `### Added` / `### Changed` / `### Fixed` subsections
- `commit.sh` (bash) and `commit.bat` (Windows) read `VERSION.md` and handle the commit and `git tag` for you. Don't hand-write the release commit or tag
- Push with `git push origin main --tags`. Pushing to `main` also redeploys the site via `.github/workflows/deploy.yml`

## License

Contributions are accepted under the project's [Mozilla Public License 2.0](LICENCE.txt).
