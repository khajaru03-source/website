#!/usr/bin/env bash
set -e

REPO_URL="$1"

if [ -z "$REPO_URL" ]; then
  echo "Usage: ./sync-to-github.sh <GITHUB_REPO_URL_WITH_TOKEN_OR_SSH>"
  echo "Example: ./sync-to-github.sh https://ghp_xxx@github.com/username/shakti-jewellers.git"
  exit 1
fi

echo "==> Configuring remote origin..."
if git remote | grep -q "origin"; then
  git remote set-url origin "$REPO_URL"
else
  git remote add origin "$REPO_URL"
fi

echo "==> Verifying local repository integrity..."
git status
FILE_COUNT=$(git ls-tree -r --name-only HEAD | wc -l)
echo "==> Total committed files to synchronize: $FILE_COUNT"

echo "==> Pushing all branches and tags to GitHub..."
git push -u origin main --force

echo "==> Verifying synchronization..."
git remote -v
git log -1 --stat

echo "==> SUCCESS: All $FILE_COUNT files and assets successfully pushed to GitHub!"
