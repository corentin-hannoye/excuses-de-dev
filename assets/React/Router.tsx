import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./b/Home/Home";
import Lost from "./b/Lost/Lost";
import Root from "./Root";
import Error404 from "./b/Errors/Error404";
import Apologies from "./b/Apology/Apologies";
import Apology from "./b/Apology/Apology";
import AddApology from "./b/Apology/AddApology";

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
                path: "apology/add",
                element: <AddApology />
            },
            {
                path: ":http_code",
                element: <Apology />
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
