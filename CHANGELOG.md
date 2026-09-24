# Changelog

All notable changes to Infinite Fusion Playground (PokeFusion) are documented
here. The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## v1.0.2

### Added
- `README.md`: what the project is, why it's discontinued, how it loads sprites, local development, credits, and license.
- `public/logo.svg`, used as the README header logo.
- A "This project is discontinued" banner at the top of every page (`src/components/site/DiscontinuedBanner.tsx`). It explains the missing sprites and links to the README.
- `CHANGELOG.md`, `VERSION.md`, `CONTRIBUTING.md`, and `commit.sh`/`commit.bat` for tagged releases.
- "Boring Legal Stuff" hub at `/legal`, linked from the footer, with Privacy Policy, Terms and Ethics, Cookies Policy, Imprint, Disclaimer, and Opt-Out Preferences. They cover what the app actually stores (localStorage, the PokéAPI IndexedDB cache) and which third parties it contacts. Redirect pages in `public/legal/` make the plain `/legal/...` URLs work alongside the app's hash routes.
- A "Clear all local data" button on the Opt-Out Preferences page, which removes everything the app stores in the browser.
- `dev-server.sh`/`dev-server.bat` (backed by `dev-server.js`): starts Vite with dev mode forced on, showing a dev-only banner. Takes an optional port and `--no-dev-mode`.
- Footer copyright line, "© 2023–<current year> StuxieDev", starting from StuxieDev's first commit to this fork.

### Fixed
- Removed an unused `@ts-expect-error` in `src/api/api.ts` that made `npm run ts-validate`, and so CI validation, fail.
- `package.json`: the `bugs` URL pointed at `StuixeDev` instead of `StuxieDev`.

### Changed
- `deploy.yml` now uses GitHub Pages' official actions (`configure-pages`, `upload-pages-artifact`, `deploy-pages`), matching the other StuxieDev sites, instead of pushing `dist/` to a `gh-pages` branch with `JamesIves/github-pages-deploy-action`. It can also be run manually (`workflow_dispatch`).
- Default branch renamed from `master` to `main`. `deploy.yml` deploys on pushes to `main`. `validate.yml` now runs on pull requests into `main`; it used to target a `develop` branch that doesn't exist.
- All workflows moved to `actions/checkout@v4` and `actions/setup-node@v4`, on Node 20 instead of 18.
- Project marked as **discontinued**. The auto-generated sprite source it depends on, `Aegide/autogen-fusion-sprites`, has been taken down.

## v1.0.1 and earlier

Released before this changelog existed. See the git history. The StuxieDev UI rework was released as "v2" in March 2023, on top of Aegide's Fusion Calculator.
