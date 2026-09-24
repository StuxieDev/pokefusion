<p align="center">
  <img src="public/logo.svg" width="120" alt="Infinite Fusion Playground">
</p>

# Infinite Fusion Playground (PokeFusion)

### *A nicer way to browse Pokémon Infinite Fusion sprites.*

> [!WARNING]
> **This project is discontinued.** The fusion sprites were never bundled with the app; they were loaded directly from [`Aegide/autogen-fusion-sprites`](https://github.com/Aegide/autogen-fusion-sprites), which has since been taken down. Without it, most fusions have no sprite to show, so [pokefusion.stuxie.dev](https://pokefusion.stuxie.dev) no longer works as intended. The code is left here as a reference.

Infinite Fusion Playground is a fork of Aegide's Fusion Calculator for [Pokémon Infinite Fusion](https://infinitefusion.fandom.com/wiki/Pok%C3%A9mon_Infinite_Fusion_Wiki), with a reworked UI that focuses on viewing fusion sprites rather than calculating stats.

- **Single fusion:** pick a head and a body Pokémon and see the resulting fusion. Use the arrow buttons to step through the PokéDex and "evolve" a fusion.
- **Multi fusion:** pick several Pokémon and see every head/body combination side by side.
- **Favourites:** save fusions you like. They're stored locally in your browser.
- **Custom sprites:** fusions with a community-drawn custom sprite are marked. The rest fall back to the auto-generated sprite.
- Browser back/forward works for moving between fusions you've viewed.

---

## How it works

It's a static React + TypeScript single-page app built with [Vite](https://vitejs.dev/) and [MUI](https://mui.com/). Pokémon data comes from [PokéAPI](https://pokeapi.co/), and sprites are loaded at runtime from the base URLs in `.env`:

| Variable | Used for |
|---|---|
| `POKEFUSION_UI_API_URL` | PokéAPI base URL |
| `POKEFUSION_UI_CUSTOM_SPRITES_BASE_PATH` | Community custom fusion sprites (`Aegide/custom-fusion-sprites`) |
| `POKEFUSION_UI_NORMAL_SPRITES_BASE_PATH` | Auto-generated fusion sprites (`Aegide/autogen-fusion-sprites`, **now offline**) |

Pointing `POKEFUSION_UI_NORMAL_SPRITES_BASE_PATH` at a working mirror of the auto-generated sprite set (same `Battlers/<head>/<head>.<body>.png` layout) should bring the app back.

## Local development

Requires Node 20.

```
./dev-server.sh                 # https://localhost:3000, dev mode forced on
./dev-server.sh 3001 --no-dev-mode
npm run build                   # single-file build into dist/
```

On Windows, use `dev-server.bat`. The dev server runs `npm ci` the first time if `node_modules` is missing, then starts Vite with a self-signed certificate. Dev mode (`POKEFUSION_UI_DEV_MODE`) only shows a "local development build" banner. Pass `--no-dev-mode` to see the site as it behaves in production.

Other scripts: `npm run lint`, `npm run ts-validate`, `npm run format`.

Pushes to `main` build the site and deploy `dist/` with GitHub Pages' official actions (`.github/workflows/deploy.yml`). The repo's Pages source must be set to **GitHub Actions**.

## Legal pages

The "Boring Legal Stuff" hub is linked from the footer and lives at `/legal`, with Privacy Policy, Terms and Ethics, Cookies Policy, Imprint, Disclaimer, and Opt-Out Preferences under `/legal/<page>`. The app uses hash routing, so the pages themselves are React routes (`#/legal/...`, content in `src/components/content/Legal/legalDocs.tsx`). Small redirect pages in `public/legal/` make the plain `/legal/...` URLs work too. The Opt-Out page has a button that clears everything the app stores in the browser.

## Releasing

1. Update `CHANGELOG.md`
2. Bump `VERSION.md`
3. Update this README if relevant
4. Run `./commit.sh` (or `commit.bat`). It reads `VERSION.md`, commits, and tags `vX.Y.Z`
5. `git push origin main --tags`

## Credits

- Original Fusion Calculator by [Aegide](https://github.com/Aegide), built on [SDM0](https://github.com/SDM0)'s earlier work, with contributions from TimeAxis, Jokaes, and Artini04
- UI rework and this fork by [StuxieDev](https://stuxie.dev)
- Custom sprites by artists from the Pokémon Infinite Fusion Discord and Reddit communities. Auto-generated sprites from [Japeal](https://japeal.com/pkm/), extracted and fixed by Aegide. Pokémon data from [PokéAPI](https://pokeapi.co/)
- Pokémon and all related names are trademarks of Nintendo, Game Freak, and The Pokémon Company. This is an unofficial fan project and isn't affiliated with or endorsed by them

## License

Licensed under the [Mozilla Public License 2.0](LICENCE.txt), as inherited from the original project. Copyright in the original code stays with its authors. StuxieDev's modifications © 2023 StuxieDev, under the same license.
