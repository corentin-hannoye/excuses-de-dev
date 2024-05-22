import React from "react";
import { createRoot } from "react-dom";
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Lost from "./pages/Lost/Lost";
import Root from "./Root";
import Error404 from "./pages/Errors/Error404";
import Messages from "./pages/Messages/Messages";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error404 />,
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
                path: ":http_code",
                element: <Messages />
            }
        ]
    }
]);

createRoot(document.getElementById("app"))
.render(<RouterProvider router={router} />);
