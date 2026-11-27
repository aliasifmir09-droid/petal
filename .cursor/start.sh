#!/usr/bin/env bash
# Per-boot: run the Petalswift Next.js dev server in the foreground.
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
cd "$REPO_ROOT"

# Hold the boot process so start-user.status stays empty while healthy.
exec npm run dev -- --hostname 0.0.0.0 --port 3000
