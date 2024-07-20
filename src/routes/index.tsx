import { createBrowserRouter } from "react-router-dom";

import { Layout } from "../pages";
import { About } from "../pages/About";
import { Events } from "../pages/Events";
import { Home } from "../pages/Home";
import { Members } from "../pages/Members";
import { News } from "../pages/News";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/members",
        element: <Members />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
