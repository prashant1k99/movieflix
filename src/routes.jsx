import { createBrowserRouter } from "react-router-dom";
import App from './App'
import MainLayout from './layout/main'

const routes = [
  {
    element: <MainLayout />,
    errorElement: <h1>404</h1>,
    children: [
      {
        path: '/',
        element: <App />
      },
      {
        path: '/test',
        element: <h1>This is test route</h1>
      }
    ]
  }
]

const router = createBrowserRouter(routes, {
  basename: "/"
})

export default router