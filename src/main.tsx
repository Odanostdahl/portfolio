import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import RouterSetup from "./RouterSetup.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterSetup />
  </StrictMode>,
)
