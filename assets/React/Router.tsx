import React from "react";
import {createRoot} from "react-dom";
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Lost from "./pages/Lost/Lost";
import Root from "./Root";

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
            }
        ]
    }
]);

createRoot(document.getElementById("app"))
.render(<RouterProvider router={router} />);
