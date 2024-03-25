/* import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './App';

// Use createRoot instead of ReactDOM.render
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error('Root element not found in the document.');
}
 */
// index.tsx or App.tsx

// index.tsx

import React from 'react';
import { createRoot } from 'react-dom'; // Import createRoot instead of ReactDOM.render
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';

// Use createRoot instead of ReactDOM.render
const root = createRoot(document.getElementById('root'));

root.render(
  <Router>
    <App />
  </Router>
);
