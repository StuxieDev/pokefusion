@echo off
REM PokeFusion - local dev server (Windows)
REM Usage: dev-server.bat [port] [--no-dev-mode]
REM   port            default: 3000
REM   --no-dev-mode   don't force dev mode on for this run (see dev-server.js)
setlocal
set "DIR=%~dp0"
node "%DIR%dev-server.js" %*
