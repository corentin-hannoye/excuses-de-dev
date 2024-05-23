import React, { useState, useEffect } from "react";
import axios from "axios";
import Apology from "../../Components/Apology/Apology";

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
                apologies.map((apology: any, id: number) =>
                    <React.Fragment key={id}>
                        <Apology apology={apology} />
                    </React.Fragment>
                )):
                <p>Chargement des excuses...</p>
        }
    </>;
}
