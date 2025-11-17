import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ApiContext, ApiProvider } from './Context/APIcontext.jsx'
import { MovieContext, MovieProvider } from './Context/MovieContext.jsx'
createRoot(document.getElementById('root')).render(

    <BrowserRouter>
      <ApiProvider>
        <MovieProvider>
          <App />
        </MovieProvider>
      </ApiProvider>
    </BrowserRouter>

)
