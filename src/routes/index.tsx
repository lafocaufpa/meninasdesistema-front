import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { News } from "../pages/News";
import { Events } from "../pages/Events";
import { Members } from "../pages/Members";
import { About } from "../pages/About";
import { Layout } from "../pages";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/news",
                element: <News />
            },
            {
                path: "/events",
                element: <Events />
            },
            {
                path: "/members",
                element: <Members />
            },
            {
                path: "/about",
                element: <About />
            },
        ],
    },
])