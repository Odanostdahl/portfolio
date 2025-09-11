import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import RouterSetup from "./RouterSetup.tsx";
import {ChakraProvider} from "@chakra-ui/react";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <ChakraProvider>
        <RouterSetup />
      </ChakraProvider>
  </StrictMode>,
)
