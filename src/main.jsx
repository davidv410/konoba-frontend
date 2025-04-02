import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App'
import Article from './components/Article/Article'
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
  [
    { path: "/", element: <App /> },
    { path: "/article/:title", element: <Article /> }
  ],
  {
    basename: "/konoba-frontend",
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
