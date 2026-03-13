#!/usr/bin/env bash
set -euo pipefail

PORT="${1:-4173}"
HOST="0.0.0.0"

printf '\n🚀 APNA AI local server start ho raha hai...\n'
printf 'URL (local): http://127.0.0.1:%s\n' "$PORT"
printf 'URL (LAN):   http://localhost:%s\n\n' "$PORT"

exec python3 -m http.server "$PORT" --bind "$HOST"
