# Troubleshooting Looker Studio Custom Visualization

## ❌ Your Current Error

**Error**: "Please enter a valid manifest path"

## 🔍 Why This Happens

GitHub raw URLs sometimes have CORS (Cross-Origin Resource Sharing) issues that prevent Looker Studio from loading them properly. This is a known issue.

## ✅ **SOLUTION: Use GitHub Pages Instead**

### Why GitHub Pages Works Better:
- Proper CORS headers
- More reliable for web applications
- Officially supported by Looker Studio

### Step 1: Enable GitHub Pages

1. Go to your GitHub repository: https://github.com/ahmedali-1995/looker-studio-vis
2. Click **Settings** (tab at the top)
3. Scroll down to **Pages** (in the left sidebar)
4. Under "Source", select **"main"** branch
5. Select **"/ (root)"** folder
6. Click **Save**

### Step 2: Update manifest.json with GitHub Pages URLs

Replace the current URLs with GitHub Pages URLs:

```json
{
  "components": [
    {
      "resource": {
        "js": "https://ahmedali-1995.github.io/looker-studio-vis/main.js",
        "config": "https://ahmedali-1995.github.io/looker-studio-vis/styles.js"
      }
    }
  ]
}
```

### Step 3: Update Your Files on GitHub

1. Download the updated `manifest.json` from the Looker_Studio_Custom_Viz folder
2. Upload it to your GitHub repository (replace the old one)
3. Also upload: `main.js` and `styles.js`
4. Wait 2-3 minutes for GitHub Pages to deploy

### Step 4: Use This URL in Looker Studio

```
https://ahmedali-1995.github.io/looker-studio-vis/manifest.json
```

---

## 🆕 Alternative: Use Google Cloud Storage (Recommended)

If GitHub Pages still doesn't work, use Google Cloud Storage:

### Setup:

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a bucket (or use existing)
3. Upload: `manifest.json`, `main.js`, `styles.js`
4. Make bucket public
5. Get the public URLs like:
   - `https://storage.googleapis.com/YOUR-BUCKET/manifest.json`

### This is what Looker Studio officially recommends!

---

## 🧪 How to Test Your Setup

### Test 1: Manifest URL
Open in browser:
```
https://ahmedali-1995.github.io/looker-studio-vis/manifest.json
```
Should show: Valid JSON (no HTML error page)

### Test 2: JavaScript File
Open in browser:
```
https://ahmedali-1995.github.io/looker-studio-vis/main.js
```
Should show: JavaScript code (not HTML)

### Test 3: Styles File
Open in browser:
```
https://ahmedali-1995.github.io/looker-studio-vis/styles.js
```
Should show: JavaScript code (not HTML)

---

## ❌ Common Issues

### Issue: "Please enter a valid manifest path"
**Cause**: URL doesn't return valid JSON or has CORS issues
**Fix**: Use GitHub Pages or Google Cloud Storage

### Issue: "Failed to load visualization"
**Cause**: JavaScript files can't be accessed
**Fix**: 
- Check all file URLs in manifest
- Make sure repository/bucket is public
- Verify files are uploaded correctly

### Issue: Files show HTML instead of content
**Cause**: Using wrong URL (blob URL instead of raw/pages)
**Fix**: Use the correct URL format (see above)

---

## 📚 References

- [Official Looker Studio Tutorial](https://codelabs.developers.google.com/codelabs/community-visualization/)
- [Community Visualization Documentation](https://developers.google.com/looker-studio/visualization)

