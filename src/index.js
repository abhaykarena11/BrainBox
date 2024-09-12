// Import necessary libraries
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Access the root element in the DOM
const Root = document.getElementById('root');

// Create a root and render the App component
createRoot(Root).render(<App />);
