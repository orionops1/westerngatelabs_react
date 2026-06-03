# Complete Git History Cleanup

## Problem
The `node_modules` folder is still in Git's history. Simply removing it from the working directory isn't enough - we need to rewrite Git history.

## Solution - Using git filter-repo (Recommended)

### Step 1: Install git-filter-repo
```bash
# On Windows with pip:
pip install git-filter-repo

# Or download from: https://github.com/newren/git-filter-repo/releases
```

### Step 2: Clean Git history
```bash
# Navigate to your repo
cd path/to/westerngatelabs_react

# Remove node_modules from all commits
git filter-repo --path node_modules --invert-paths

# Remove .next from all commits (optional but recommended)
git filter-repo --path .next --invert-paths
```

### Step 3: Force push
```bash
git push origin main --force
```

---

## Alternative Solution - Using git filter-branch (If filter-repo not available)

```bash
# Remove node_modules from history
git filter-branch --tree-filter 'rm -rf node_modules' --prune-empty -f HEAD

# Remove .next from history (optional)
git filter-branch --tree-filter 'rm -rf .next' --prune-empty -f HEAD

# Force push
git push origin main --force
```

---

## Step 4: Verify
After pushing, verify on GitHub:
1. Go to https://github.com/orionops1/westerngatelabs_react
2. Check that node_modules folder no longer exists
3. Repository size should be much smaller

## Step 5: Redeploy on Vercel
1. Go to https://vercel.com/dashboard
2. Trigger a redeploy
3. Deployment should now succeed

---

## Warning
⚠️ `--force` rewrites history. If anyone else is working on this repo:
- They must do `git pull --rebase` after this
- Or they should clone fresh

For a solo project, this is safe to do.
