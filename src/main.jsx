import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App'
import Article from './components/Article/Article'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import BookConfirm from './components/bookatable/bookConfirm/BookConfirm'
import Admin from './components/adminlogin/Admin'
import { UserProvider } from './contexts/UserContext'

const router = createBrowserRouter(
  [
    { path: "/", element: <App /> },
    { path: "/blog/:title", element: <Article /> },
    { path: "admin-login", element: <Admin />},
    { path: "admin-confirm", element: <BookConfirm />}
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <RouterProvider router={router}/>
    </UserProvider>
  </StrictMode>
)