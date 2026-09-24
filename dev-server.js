#!/usr/bin/env node
// PokeFusion — local dev server.
//
// Thin wrapper around Vite that forces POKEFUSION_UI_DEV_MODE=true for local
// runs, so the dev-only banner (src/components/site/DevBanner.tsx) shows out
// of the box. Production builds never set it, so the banner never ships.
//
// Usage: node dev-server.js [port] [--no-dev-mode]
//   port            default: 3000
//   --no-dev-mode   don't force dev mode on, to test production behaviour
const { spawnSync, spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

const ROOT = __dirname;
const args = process.argv.slice(2);
let port = 3000;
let devMode = true;

for (const arg of args) {
  if (arg === "--no-dev-mode") {
    devMode = false;
  } else if (/^\d+$/.test(arg)) {
    port = parseInt(arg, 10);
  } else {
    console.error(`Unknown option: ${arg}`);
    process.exit(1);
  }
}

if (!fs.existsSync(path.join(ROOT, "node_modules"))) {
  console.log("node_modules not found - running npm ci first...");
  // A single command string (no args array) so the shell is only needed to
  // find npm/npm.cmd, and nothing user-supplied is ever passed through it.
  const install = spawnSync("npm ci", { cwd: ROOT, stdio: "inherit", shell: true });
  if (install.status !== 0) {
    process.exit(install.status ?? 1);
  }
}

const env = { ...process.env };
if (devMode) {
  env.POKEFUSION_UI_DEV_MODE = "true";
} else {
  delete env.POKEFUSION_UI_DEV_MODE;
}

console.log(
  `Starting Vite on https://localhost:${port} (dev mode ${devMode ? "on" : "off"})`
);
// Run Vite's own CLI script with this Node binary, so no shell is involved.
const viteBin = path.join(ROOT, "node_modules", "vite", "bin", "vite.js");
const vite = spawn(
  process.execPath,
  [viteBin, "--port", String(port), "--strictPort"],
  { cwd: ROOT, env, stdio: "inherit" }
);
vite.on("exit", code => process.exit(code ?? 0));
// Stop Vite too if this wrapper is told to stop, so it can't be orphaned.
for (const signal of ["SIGINT", "SIGTERM", "SIGHUP"]) {
  process.on(signal, () => vite.kill(signal));
}
