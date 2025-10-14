import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // StrictMode is a development-only tool that:
  // - Identifies potential problems (e.g., unsafe lifecycles)
  // - Warns about deprecated practices
  // - Helps detect side effects by double-rendering components
  <StrictMode>
    <App />
  </StrictMode>,
)
