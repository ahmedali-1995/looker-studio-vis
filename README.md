# Custom Looker Studio Community Visualization

This folder contains a custom community visualization for Looker Studio (formerly Google Data Studio).

## Files Overview

- **manifest.json** - Configuration file that defines the visualization structure and data requirements
- **main.js** - Main JavaScript file containing the visualization logic
- **styles.js** - Custom styles and CSS for the visualization
- **index.html** - HTML structure for the visualization (used for testing)
- **README.md** - This file

## Setup Instructions

### 1. Deploy to Google Cloud Storage or GitHub

You need to host your visualization files in a publicly accessible location:
- Google Cloud Storage bucket
- GitHub Pages
- Any static web hosting service

### 2. Register in Looker Studio

1. Open Looker Studio
2. Create a new report
3. Go to "Resources" > "Manage Community Visualizations"
4. Click "Add Community Visualization"
5. Enter your manifest URL (e.g., `https://your-bucket.com/Looker_Studio_Custom_Viz/manifest.json`)

### 3. Customize Your Visualization

Edit the following files according to your needs:

#### manifest.json
Define the data structure and dimensions/metrics your visualization requires.

#### main.js
Customize the `renderVisualization()` function to create your specific chart or visualization.

#### styles.js
Add custom styling to match your brand or design requirements.

## Development

### Testing Locally

1. Open `index.html` in a web browser
2. Modify the code in `main.js` as needed
3. Refresh the browser to see changes

### Data Structure

Your visualization will receive data from Looker Studio in the following structure:

```javascript
{
  tables: {
    DEFAULT: [
      { dimension: "value1", metric: 100 },
      { dimension: "value2", metric: 200 }
      // ... more rows
    ]
  }
}
```

## Customization Tips

1. **Chart Type**: You can use any charting library like Chart.js, D3.js, or Google Charts
2. **Data Processing**: Modify `getDimensions()` and `getMetrics()` to process your specific data structure
3. **Styling**: Update `styles.js` to match your brand colors and design
4. **Interactivity**: Add event listeners in `main.js` to make your visualization interactive

## Example Chart Libraries

Consider adding these libraries for advanced visualizations:

```html
<!-- Chart.js -->
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

<!-- D3.js -->
<script src="https://d3js.org/d3.v7.min.js"></script>

<!-- Google Charts -->
<script src="https://www.gstatic.com/charts/loader.js"></script>
```

## Need Help?

- [Looker Studio Community Visualizations Documentation](https://developers.google.com/looker-studio/community-visualizations)
- [Community Visualizations API Reference](https://developers.google.com/looker-studio/community-visualizations/api-reference)

## License

This is a template provided for your use. Customize it according to your needs.

