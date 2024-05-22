import React, { useRef, useEffect } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";

export default function() {
    const navRef = useRef();
    const mainRef = useRef();

    useEffect(() => {
        setLeftMainApp();
        addEventListener("resize", setLeftMainApp);
    }, []);

    const setLeftMainApp = () => {
        const navWidth = navRef.current.offsetWidth;

        mainRef.current.style.setProperty("left", `${navWidth}px`);
    }

    return <>
        <div className="flex">
            <div ref={navRef} className="app_nav">
                <Navigation />
            </div>
            <main ref={mainRef} className="app_main">
                <Outlet />
            </main>
        </div>
        <ScrollRestoration />
    </>;
}
