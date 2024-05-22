import axios from "axios";
import React, { useState, useEffect } from "react";

export default function({ setApology }) {
    const [apologies, setApologies] = useState([]);

    useEffect(() => {

        axios.get("/api/apologies")
        .then(res => {
            setApologies(res.data["hydra:member"]);
        })

    }, []);

    useEffect(() => {
        if(apologies.length > 0) {
            getRandomApology();
        }
    }, [apologies]);

    const getRandomApology = () => {
        setApology(apologies[(Math.floor(Math.random() * apologies.length))].message);
        delete apologies[(Math.floor(Math.random() * apologies.length))];
        setApologies(apologies);
    }

    // Fonction appelée lors du clique pour générer une nouvelle phrase
    const handleClick = () => {
        getRandomApology();
    }

    return <>
        <button onClick={handleClick}>Générer</button>
    </>;
}
