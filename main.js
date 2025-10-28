/**
 * Main JavaScript file for Custom Looker Studio Visualization
 * This follows the Looker Studio Community Visualization API
 */

(function() {
  'use strict';
  
  // Callback for Looker Studio to initialize the visualization
  gdc.lookerstudio.viz.initialize(function(viz) {
    
    // Create the container
    const container = document.createElement('div');
    container.id = 'viz-container';
    container.style.width = '100%';
    container.style.height = '100%';
    container.style.boxSizing = 'border-box';
    
    // Add container to the visualization
    viz.root(container);
    
    // Handle rendering when data changes
    viz.on('render', function() {
      try {
        renderVisualization(viz);
      } catch (error) {
        console.error('Error rendering visualization:', error);
        container.innerHTML = '<div style="padding: 20px; color: #d32f2f;">Error rendering visualization: ' + error.message + '</div>';
      }
    });
    
  });
  
  /**
   * Render the visualization
   * @param {Object} viz - Looker Studio visualization instance
   */
  function renderVisualization(viz) {
    const data = viz.getData();
    const config = viz.getConfig();
    const container = document.getElementById('viz-container');
    
    if (!container) {
      console.error('Container not found');
      return;
    }
    
    // Clear previous content
    container.innerHTML = '';
    
    // Check if data is available
    if (!data || !data.tables || !data.tables.DEFAULT || data.tables.DEFAULT.length === 0) {
      container.innerHTML = '<div style="padding: 20px; text-align: center; color: #666; font-family: Arial, sans-serif;">No data available</div>';
      return;
    }
    
    // Get the table data
    const table = data.tables.DEFAULT;
    
    // Create visualization content
    createVisualization(table, container, config);
  }
  
  /**
   * Create the actual visualization
   * @param {Array} table - Table data from Looker Studio
   * @param {HTMLElement} container - Container element
   * @param {Object} config - Configuration options
   */
  function createVisualization(table, container, config) {
    // Create main visualization container
    const vizCard = document.createElement('div');
    vizCard.style.cssText = 'padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); height: 100%; box-sizing: border-box;';
    
    // Add title
    const title = document.createElement('h2');
    title.textContent = 'Custom Visualization';
    title.style.cssText = 'margin: 0 0 20px 0; color: white; font-family: Arial, sans-serif; font-size: 24px; font-weight: 500;';
    vizCard.appendChild(title);
    
    // Create data display
    const dataDisplay = document.createElement('div');
    dataDisplay.style.cssText = 'background: white; border-radius: 4px; padding: 15px; overflow-x: auto;';
    
    // Create a simple data table
    const tableElement = document.createElement('table');
    tableElement.style.cssText = 'width: 100%; border-collapse: collapse; font-family: Arial, sans-serif;';
    
    // Get column names from the first row
    if (table.length > 0) {
      const firstRow = table[0];
      const headers = Object.keys(firstRow);
      
      // Create header row
      const thead = document.createElement('thead');
      const headerRow = document.createElement('tr');
      
      headers.forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        th.style.cssText = 'padding: 10px; background-color: #f5f5f5; font-weight: bold; text-align: left; border-bottom: 2px solid #ddd;';
        headerRow.appendChild(th);
      });
      
      thead.appendChild(headerRow);
      tableElement.appendChild(thead);
      
      // Create data rows
      const tbody = document.createElement('tbody');
      table.slice(0, 10).forEach(row => { // Limit to 10 rows for display
        const tr = document.createElement('tr');
        
        headers.forEach(header => {
          const td = document.createElement('td');
          td.textContent = row[header] || '-';
          td.style.cssText = 'padding: 8px; border-bottom: 1px solid #ddd;';
          tr.appendChild(td);
        });
        
        tr.style.transition = 'background-color 0.2s';
        tr.addEventListener('mouseenter', function() {
          this.style.backgroundColor = '#f5f5f5';
        });
        tr.addEventListener('mouseleave', function() {
          this.style.backgroundColor = 'transparent';
        });
        
        tbody.appendChild(tr);
      });
      
      tableElement.appendChild(tbody);
    }
    
    dataDisplay.appendChild(tableElement);
    vizCard.appendChild(dataDisplay);
    
    // Add data summary
    const summary = document.createElement('div');
    summary.style.cssText = 'margin-top: 15px; color: white; font-family: Arial, sans-serif; font-size: 14px;';
    summary.textContent = `Total rows: ${table.length}`;
    vizCard.appendChild(summary);
    
    container.appendChild(vizCard);
  }
  
  // Handle exports if needed
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      renderVisualization: renderVisualization,
      createVisualization: createVisualization
    };
  }
  
})();
