/**
 * Main JavaScript file for Custom Looker Studio Visualization
 * This is the entry point for your custom visualization
 */

'use strict';

/**
 * Initialize the visualization
 * @param {Object} data - Data from Looker Studio
 */
function initialize(data) {
  console.log('Initializing custom visualization...', data);
  
  // Get the container element
  const container = document.getElementById('viz-container');
  
  if (!container) {
    console.error('Container element not found');
    return;
  }
  
  // Clear any existing content
  container.innerHTML = '';
  
  // Check if data exists and has content
  if (!data || !data.tables || !data.tables.DEFAULT) {
    container.innerHTML = '<p>No data available</p>';
    return;
  }
  
  // Get the table data
  const table = data.tables.DEFAULT;
  
  // Process and render the data
  renderVisualization(table, container);
}

/**
 * Render the visualization based on the data
 * @param {Object} table - Table data from Looker Studio
 * @param {HTMLElement} container - Container element to render into
 */
function renderVisualization(table, container) {
  // Extract dimensions and metrics
  const dimensions = getDimensions(table);
  const metrics = getMetrics(table);
  
  // Create a simple chart (you can customize this)
  const canvas = document.createElement('div');
  canvas.id = 'chart-canvas';
  canvas.style.width = '100%';
  canvas.style.height = '400px';
  canvas.style.border = '1px solid #ccc';
  canvas.style.padding = '20px';
  canvas.style.backgroundColor = '#f9f9f9';
  
  // Add a title
  const title = document.createElement('h3');
  title.textContent = 'Custom Visualization';
  title.style.marginBottom = '20px';
  title.style.color = '#333';
  canvas.appendChild(title);
  
  // Display data in a table format
  const dataTable = createDataTable(table);
  canvas.appendChild(dataTable);
  
  container.appendChild(canvas);
}

/**
 * Get dimensions from table data
 * @param {Object} table - Table data
 * @returns {Array} Array of dimension data
 */
function getDimensions(table) {
  const dimensions = [];
  
  if (table && table[0]) {
    // Iterate through the table rows
    for (let i = 0; i < table.length; i++) {
      const row = table[i];
      dimensions.push(row);
    }
  }
  
  return dimensions;
}

/**
 * Get metrics from table data
 * @param {Object} table - Table data
 * @returns {Array} Array of metric data
 */
function getMetrics(table) {
  const metrics = [];
  
  if (table && table[0]) {
    // Iterate through the table rows
    for (let i = 0; i < table.length; i++) {
      const row = table[i];
      metrics.push(row);
    }
  }
  
  return metrics;
}

/**
 * Create a data table for display
 * @param {Object} table - Table data
 * @returns {HTMLElement} Table element
 */
function createDataTable(table) {
  const tableElement = document.createElement('table');
  tableElement.style.width = '100%';
  tableElement.style.borderCollapse = 'collapse';
  
  // Get the first row to determine columns
  if (!table || table.length === 0) {
    const noDataRow = tableElement.insertRow();
    const cell = noDataRow.insertCell();
    cell.colSpan = 2;
    cell.textContent = 'No data available';
    cell.style.textAlign = 'center';
    cell.style.padding = '20px';
    return tableElement;
  }
  
  // Create header row (simplified - you may need to adjust based on your data structure)
  const headerRow = tableElement.insertRow();
  const headerCell1 = headerRow.insertCell();
  headerCell1.textContent = 'Data Column 1';
  headerCell1.style.backgroundColor = '#4CAF50';
  headerCell1.style.color = 'white';
  headerCell1.style.padding = '10px';
  headerCell1.style.border = '1px solid #ddd';
  
  const headerCell2 = headerRow.insertCell();
  headerCell2.textContent = 'Data Column 2';
  headerCell2.style.backgroundColor = '#4CAF50';
  headerCell2.style.color = 'white';
  headerCell2.style.padding = '10px';
  headerCell2.style.border = '1px solid #ddd';
  
  // Add sample rows (you'll need to adapt this to your actual data structure)
  for (let i = 0; i < Math.min(table.length, 5); i++) {
    const row = tableElement.insertRow();
    const cell1 = row.insertCell();
    cell1.textContent = `Row ${i + 1}`;
    cell1.style.padding = '8px';
    cell1.style.border = '1px solid #ddd';
    
    const cell2 = row.insertCell();
    cell2.textContent = 'Sample Data';
    cell2.style.padding = '8px';
    cell2.style.border = '1px solid #ddd';
  }
  
  return tableElement;
}

// Export functions for use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    initialize,
    renderVisualization,
    getDimensions,
    getMetrics,
    createDataTable
  };
}

