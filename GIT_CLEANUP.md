# Git Cleanup Instructions

## Problem
The `node_modules` folder was accidentally committed to GitHub, exceeding the 100MB file size limit.

## Solution

Run these commands in your terminal:

```bash
# 1. Remove node_modules from Git tracking (but keep locally)
git rm -r --cached node_modules
git rm -r --cached .next

# 2. Add .gitignore to stage it
git add .gitignore

# 3. Commit these changes
git commit -m "chore: add .gitignore and remove node_modules from git tracking"

# 4. Push to GitHub
git push origin main
```

## What this does:
- Removes `node_modules` and `.next` from Git's tracking without deleting them locally
- Commits the `.gitignore` file so they won't be tracked in the future
- Pushes the cleaned-up history to GitHub

## After cleanup:
- GitHub will reflect the changes
- Future commits won't include node_modules
- Vercel deployments will work normally
- The repo size will be significantly smaller

## If push still fails:
If you still see errors after this, you may need to:

```bash
# Force push (only if the above doesn't work)
git push origin main --force
```

⚠️ Only use `--force` if necessary, as it rewrites history.
