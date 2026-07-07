import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/style.css'
import Suarasa from './pages/Suarasa.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suarasa />
  </StrictMode>,
)
