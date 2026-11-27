#!/usr/bin/env bash
# Idempotent bootstrap for Petalswift (petal) Cloud Agents.
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
cd "$REPO_ROOT"

echo "== Installing npm dependencies =="
if [ -f package-lock.json ]; then
  npm ci
else
  npm install
fi

echo "== Install complete =="
