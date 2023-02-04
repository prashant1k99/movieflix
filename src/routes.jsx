import { createBrowserRouter } from "react-router-dom";
import App from './App'
import MainLayout from './layout/main'

const routes = [
  {
    element: <MainLayout />,
    children: [
      {
        path: '*',
        element: <h1>Hello</h1>
      }
    ]
  }
]

const router = createBrowserRouter(routes, {
  basename: "/"
})

export default router