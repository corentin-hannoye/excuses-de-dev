import React from "react";
import { createRoot } from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Lost from "./Pages/Lost/Lost";
import Root from "./Root";
import Error404 from "./Pages/Errors/Error404";
import Apologies from "./Pages/Apology/Apologies";
import Apology from "./Pages/Apology/Apology";
import AddApology from "./Pages/Apology/AddApology";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "lost",
                element: <Lost />
            },
            {
                path: "apologies",
                element: <Apologies />
            },
            {
                path: ":http_code",
                element: <Apology />
            },
            {
                path: "apology/add",
                element: <AddApology />
            },
            {
                path: "*",
                element: <Error404 />
            }
        ]
    }
]);

createRoot(document.getElementById("app"))
.render(<RouterProvider router={router} />);
