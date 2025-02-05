import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18+ uses `react-dom/client`
import './styles/App.css'; // Import global styles
import './styles/components.css'; // Import component-specific styles
import App from './App'


// Find the root element in your HTML
const rootElement = document.getElementById('root');

// Create the React root and render the App component
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
