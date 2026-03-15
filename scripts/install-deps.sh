#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

echo "[install] Attempting dependency install with environment sanitization..."

run_install() {
  local mode="$1"
  shift
  echo "[install] Mode: ${mode}"
  if timeout 90s "$@"; then
    echo "[install] Success (${mode})."
    return 0
  fi
  echo "[install] Failed (${mode})."
  return 1
}

if run_install "without-proxy-env" env \
  -u HTTP_PROXY -u HTTPS_PROXY -u http_proxy -u https_proxy -u npm_config_http_proxy -u npm_config_https_proxy \
  NO_PROXY=registry.npmjs.org,localhost,127.0.0.1 \
  no_proxy=registry.npmjs.org,localhost,127.0.0.1 \
  npm install; then
  exit 0
fi

if run_install "with-current-proxy-env" npm install; then
  exit 0
fi

echo "[install] Unable to reach package registry from this environment."
echo "[install] Verify network policy / proxy allowlist for registry.npmjs.org:443."
exit 1
