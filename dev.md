# Git

- Pull and rebase
  git pull origin <branch> --rebase

- Remove git from existing project
  rm -rf .git

- Revoke last commit and keep the file unstaged
  git reset HEAD~1

# General commands

- Clean Node_modules
  rm -rf node_modules package-lock.json

# Project setup

- .editorconfig for editor setup
- .vscode for vscode setup for workspace only
- .prettierrc for formatting setting
- eslint for finding and fixing linting issues
- husky for pre-commit hook to run lint-staged scripts
- husky for pre-push hook to prevent direct push to main and master branches
- Jest setup for test cases. Jest runner extension for running tests directly from individual files
- Remove node_module & install command: rm -rf node_modules package-lock.json npm install
