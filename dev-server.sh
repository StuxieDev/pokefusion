#!/bin/bash
# PokeFusion - local dev server
# Usage: ./dev-server.sh [port] [--no-dev-mode]
#   port            default: 3000
#   --no-dev-mode   don't force dev mode on for this run (see dev-server.js)
set -e
DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
exec node "$DIR/dev-server.js" "$@"
