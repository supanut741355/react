import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import {Provider} from './contexts/books.tsx'

createRoot(document.getElementById('root')!).render(
  <div>
    <Provider>
      <StrictMode>
        <App />
      </StrictMode>
    </Provider>
  </div>
  
)
