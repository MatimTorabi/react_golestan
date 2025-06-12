import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './output.css'
import './activ.css'
import App from './components/App/App'
import 'animate.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
