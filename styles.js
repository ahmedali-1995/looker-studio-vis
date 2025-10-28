/**
 * Styles for the Custom Looker Studio Visualization
 */

'use strict';

/**
 * Apply custom styles to the visualization
 */
function applyStyles() {
  const style = document.createElement('style');
  style.textContent = `
    #viz-container {
      width: 100%;
      height: 100%;
      font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    }
    
    #chart-canvas {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    
    #viz-container h3 {
      font-size: 24px;
      font-weight: 500;
      margin: 0 0 20px 0;
      color: white;
    }
    
    #viz-container table {
      background-color: white;
      border-radius: 4px;
      overflow: hidden;
    }
    
    #viz-container th,
    #viz-container td {
      transition: background-color 0.2s ease;
    }
    
    #viz-container tr:hover {
      background-color: #f5f5f5;
    }
    
    /* Responsive design */
    @media (max-width: 768px) {
      #viz-container h3 {
        font-size: 18px;
      }
      
      #chart-canvas {
        padding: 10px;
      }
    }
  `;
  
  document.head.appendChild(style);
}

// Apply styles when document is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', applyStyles);
} else {
  applyStyles();
}

// Export for use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    applyStyles
  };
}

