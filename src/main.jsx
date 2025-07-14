import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import DisplayTask from './DisplayTask.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DisplayTask></DisplayTask>
  </StrictMode>
)
