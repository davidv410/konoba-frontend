import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App'
import Article from './components/Article/Article'
import { createHashRouter, RouterProvider } from "react-router-dom"
import BookConfirm from './components/bookatable/bookConfirm/BookConfirm'

const router = createBrowserRouter(
  [
    { path: "/", element: <App /> },
    { path: "/blog/:title", element: <Article /> },
    { path: "admin-confirm", element: <BookConfirm />}
  ],
  {
    basename: "/konoba-frontend",
  }
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
