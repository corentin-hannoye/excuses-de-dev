import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import { ToastContainer } from "react-toastify";

export default function() {
    return <>
        <div className="flex">
            <div className="app_nav">
                <Navigation />
            </div>
            <main className="app_main">
                <Outlet />
            </main>
        </div>
        <ToastContainer />
        <ScrollRestoration />
    </>;
}
