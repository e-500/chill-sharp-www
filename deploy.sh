#!/usr/bin/env bash

# Deploy the static ChillSharp site from the main branch.
set -euo pipefail

repository_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$repository_dir"

git fetch origin main
git switch main
git pull --ff-only origin main

node scripts/verify-static-site.mjs
docker compose -f docker/docker-compose.yml up -d --build --force-recreate --remove-orphans
docker compose -f docker/docker-compose.yml ps
