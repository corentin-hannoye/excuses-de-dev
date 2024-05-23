import React, { useState, useEffect } from "react";
import axios from "axios";

export default function() {
    const [apologies, setApologies] = useState([]);

    useEffect(() => {
        
        axios.get("/api/apologies")
        .then(res => {
            setApologies(res.data["hydra:member"]);
        });

    }, []);

    return <>
        <h1 className="title mb_40">Liste d'excuses</h1>
        {
            apologies.length > 0 ? (
                apologies.map((apologie: any) =>
                    <div key={apologie.id} className="">
                        <p>{apologie.message}</p>
                    </div>
                )):
                <p>Chargement des excuses...</p>
        }
    </>;
}
