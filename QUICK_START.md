# Quick Start - Looker Studio Custom Visualization

## What Went Wrong in Your Screenshot?

The error "Please enter a valid manifest path" occurred because you used a GitHub **blob URL** (`github.com/.../blob/...`), which doesn't work with Looker Studio.

## ✅ The Solution (3 Steps)

### Step 1: Upload to GitHub

1. Go to [GitHub](https://github.com)
2. Create a new repository (make it **public**)
3. Upload these files:
   - `manifest.json`
   - `main.js`
   - `styles.js`
   - `index.html` (optional)

### Step 2: Use the Correct URL Format

Instead of: ❌ `https://github.com/user/repo/blob/main/manifest.json`

Use one of these:

**Option A - GitHub Pages (Best):**
```
https://YOUR-USERNAME.github.io/REPO-NAME/manifest.json
```
(Enable GitHub Pages in repository settings first)

**Option B - Raw URL:**
```
https://raw.githubusercontent.com/YOUR-USERNAME/REPO-NAME/main/manifest.json
```

### Step 3: Update manifest.json URLs

Before adding to Looker Studio, update the URLs in `manifest.json`:

```json
{
  "visualization": {
    "js_library": "https://raw.githubusercontent.com/YOUR-USERNAME/REPO-NAME/main/main.js"
  },
  "style": {
    "js_library": "https://raw.githubusercontent.com/YOUR-USERNAME/REPO-NAME/main/styles.js"
  }
}
```

## 🚀 Fast Setup (Copy-Paste Ready)

### 1. Create a simple GitHub repo

```bash
# In terminal (if you have git installed)
cd "Looker_Studio_Custom_Viz"
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```

### 2. Get your URLs

After uploading, your URLs are:
- **Manifest**: `https://raw.githubusercontent.com/YOUR-USERNAME/YOUR-REPO/main/manifest.json`
- **Main.js**: `https://raw.githubusercontent.com/YOUR-USERNAME/YOUR-REPO/main/main.js`
- **Styles.js**: `https://raw.githubusercontent.com/YOUR-USERNAME/YOUR-REPO/main/styles.js`

### 3. Update and Add to Looker Studio

1. Edit `manifest.json` → Replace `YOUR-USERNAME` and `YOUR-REPO` with your actual values
2. Commit and push the changes
3. Copy the manifest URL
4. Go to Looker Studio → Add Community Visualization
5. Paste your manifest URL

## ⚠️ Important Notes

- **Always use absolute URLs** in manifest.json
- **Never use blob URLs** (`github.com/.../blob/...`)
- **Test your URLs** in a browser first
- **Public repository** is required
- **Commit changes** to manifest.json after updating URLs

## 🧪 Test Your Setup

1. Open manifest URL in browser → Should show JSON
2. Open main.js URL in browser → Should show code
3. Open styles.js URL in browser → Should show code
4. If all work, try adding to Looker Studio

## Still Having Issues?

Check:
- Is the repository public?
- Are the file paths correct?
- Did you commit the latest manifest.json?
- Try GitHub Pages instead of raw URLs

See `DEPLOYMENT_GUIDE.md` for detailed instructions.

