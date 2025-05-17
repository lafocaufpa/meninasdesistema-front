import { createBrowserRouter } from "react-router-dom";

import { Layout } from "../pages";
import { About } from "../pages/About";
import { Event } from "../pages/Event";
import { Events } from "../pages/Events";
import { Home } from "../pages/Home";
import { Members } from "../pages/Members";
import { News } from "../pages/News";
import { OnNews } from "../pages/OnNews";

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
      {
        path: "/example-news",
        element: <OnNews />,
      },
      {
        path: "/example-event",
        element: <Event />,
      },
    ],
  },
]);
