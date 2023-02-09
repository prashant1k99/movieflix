import { createBrowserRouter, Outlet } from "react-router-dom";
import App from "./App";
import Carousel from "./pages/Carousel";
import MainLayout from "./layout/main";
import ImageCard from "./component/Image";

const routes = [
  {
    element: <MainLayout />,
    errorElement: <h1>404</h1>,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/test",
        element: <p>Test</p>,
      },
      {
        path: "/carousel",
        element: <Carousel />,
      },
    ],
  },
];

const router = createBrowserRouter(routes, {
  basename: "/",
});

export default router;
