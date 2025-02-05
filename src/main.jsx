import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import routes from './routes.jsx'

const BrowserRouter = createBrowserRouter(routes)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={BrowserRouter} />
  </StrictMode>,
)
