# Deployment Guide for Looker Studio Custom Visualization

## The Problem with GitHub URLs

The image you shared shows an error because **GitHub blob URLs don't work for Looker Studio**. You need to use one of these alternatives:

## Option 1: GitHub Pages (Recommended - Free & Easy)

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it something like `looker-studio-viz` or `my-custom-viz`
3. Make it public (required for GitHub Pages)

### Step 2: Upload Your Files

Upload all files from `Looker_Studio_Custom_Viz` folder:
- manifest.json
- main.js
- styles.js
- index.html

### Step 3: Enable GitHub Pages

1. In your repository, go to **Settings** → **Pages**
2. Under "Source", select **"main" branch** (or your default branch)
3. Click **Save**

### Step 4: Get Your URLs

Your files will be accessible at:
- Manifest: `https://YOUR-USERNAME.github.io/REPO-NAME/manifest.json`
- Main.js: `https://YOUR-USERNAME.github.io/REPO-NAME/main.js`
- Styles.js: `https://YOUR-USERNAME.github.io/REPO-NAME/styles.js`

### Step 5: Update manifest.json

Update the URLs in `manifest.json`:
```json
{
  "visualization": {
    "js_library": "https://YOUR-USERNAME.github.io/REPO-NAME/main.js"
  },
  "style": {
    "js_library": "https://YOUR-USERNAME.github.io/REPO-NAME/styles.js"
  }
}
```

### Step 6: Add to Looker Studio

In Looker Studio, enter your manifest URL:
```
https://YOUR-USERNAME.github.io/REPO-NAME/manifest.json
```

---

## Option 2: Use GitHub Raw URLs (Quick Test)

If you want to test quickly without setting up GitHub Pages:

### Get Raw URLs

1. Go to your GitHub repository
2. Navigate to the file
3. Click **"Raw"** button
4. Copy the URL

Your URLs would be:
- Manifest: `https://raw.githubusercontent.com/YOUR-USERNAME/REPO-NAME/main/manifest.json`
- Main.js: `https://raw.githubusercontent.com/YOUR-USERNAME/REPO-NAME/main/main.js`
- Styles.js: `https://raw.githubusercontent.com/YOUR-USERNAME/REPO-NAME/main/styles.js`

### Update manifest.json

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

### Add to Looker Studio

Use the raw manifest URL:
```
https://raw.githubusercontent.com/YOUR-USERNAME/REPO-NAME/main/manifest.json
```

**Note:** GitHub might add headers that prevent proper loading. GitHub Pages is more reliable.

---

## Option 3: Other Hosting Services

### Google Cloud Storage

1. Create a bucket
2. Upload files
3. Make bucket public
4. Use URLs like: `https://storage.googleapis.com/YOUR-BUCKET/manifest.json`

### Netlify / Vercel

1. Deploy your folder
2. Get your deployment URL
3. Use URLs like: `https://YOUR-SITE.netlify.app/manifest.json`

---

## Troubleshooting

### Common Errors

**Error: "Please enter a valid manifest path"**
- Use `raw.githubusercontent.com` or GitHub Pages URL
- Don't use blob URLs (`github.com/.../blob/...`)

**Error: "Failed to load visualization"**
- Check that all JavaScript files are accessible
- Open the manifest URL in browser to verify it returns JSON
- Check browser console for errors

### Verify Your Setup

1. Open manifest URL in browser → Should show JSON
2. Open main.js URL in browser → Should show JavaScript code
3. Open styles.js URL in browser → Should show JavaScript with styles
4. All URLs should return content (not 404 errors)

---

## Quick Checklist

- [ ] Files uploaded to GitHub
- [ ] GitHub Pages enabled (or using raw URLs)
- [ ] All files accessible via URLs
- [ ] manifest.json uses absolute URLs
- [ ] URLs point to correct locations
- [ ] Test URLs in browser first
- [ ] Copy manifest URL to Looker Studio

---

## Example Setup

If your repository is `github.com/john/looker-viz`:

**Your manifest.json should have:**
```json
{
  "visualization": {
    "js_library": "https://john.github.io/looker-viz/main.js"
  },
  "style": {
    "js_library": "https://john.github.io/looker-viz/styles.js"
  }
}
```

**In Looker Studio, enter:**
```
https://john.github.io/looker-viz/manifest.json
```

