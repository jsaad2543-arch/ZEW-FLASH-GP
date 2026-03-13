#!/usr/bin/env bash
set -euo pipefail

PORT="${1:-4173}"
BASE_URL="http://127.0.0.1:${PORT}"

check() {
  local path="$1"
  local expect="$2"
  local body

  body="$(curl -fsSL "${BASE_URL}${path}")"
  if [[ "$body" != *"$expect"* ]]; then
    echo "❌ Failed: ${path} missing expected text: ${expect}"
    exit 1
  fi

  echo "✅ Passed: ${path} contains '${expect}'"
}

check "/" "APNA AI"
check "/script.js" "buildAnswer"
check "/manifest.webmanifest" "APNA AI ZAIN"

echo "\n✅ Smoke test completed successfully."
