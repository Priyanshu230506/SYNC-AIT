import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
// Import Tailwind-generated output before the app's custom stylesheet so
// Tailwind utilities are available and can be overridden by App.css where needed.
import './index.css'
import './App.css'

const root = createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
