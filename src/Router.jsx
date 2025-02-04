import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Work from "./Pages/Work";
import Prices from "./Pages/Prices";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/works",
        element: <Work />,
      },
      {
        path: "/prices",
        element: <Prices />,
      },
    ],
  },
]);
