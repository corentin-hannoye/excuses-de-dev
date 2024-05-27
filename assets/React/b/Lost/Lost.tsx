import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { HOME_URL } from "../../../const";
import lostGIF from "../../../media/lost.gif";

export default function() {
    const [seconds, setSeconds] = useState(5);
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((seconds: number) => --seconds);
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    useEffect(() => {
        if(seconds < 0) {
            navigate(HOME_URL);
        }
    }, [seconds]);

    return <div className="align_center">
        <h1 className="mb_40">I'm lost</h1>
        <p className="mb_20">Redirection dans { seconds }</p>
        <img src={lostGIF} alt="Gif i'm lost" />
    </div>;
}
