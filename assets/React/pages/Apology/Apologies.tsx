import React, { useState, useEffect } from "react";
import ky from "ky";
import Apology from "../../Components/Apology/Apology";

export default function() {
    const [apologies, setApologies] = useState([]);

    useEffect(() => {
        
        ky
            .get("/api/apologies", {
                headers: {
                    "Accept": "application/ld+json"
                },
            })
            .json()
            .then(res => {
                setApologies(res["hydra:member"]);
            });

    }, []);

    return <>
        <h1 className="title mb_40">Liste d'excuses</h1>
        {
            apologies.length > 0 ? (
                apologies.map((apology: any, id: number) =>
                    <React.Fragment key={id}>
                        <Apology apology={apology} />
                    </React.Fragment>
                )):
                <p>Chargement des excuses...</p>
        }
    </>;
}
