import React, { useState, useEffect } from "react";
import Apology from "../../a/Apology/Apology";
import { findAllApologies } from "../../Services/API/API";

export default function() {
    const [apologies, setApologies] = useState([]);

    useEffect(() => {

        (async () => {

            const data = await findAllApologies();

            setApologies(data["hydra:member"]);

        })();

    }, []);

    return <>
        <h1 className="title mb_40">Liste d'excuses</h1>
        {
            apologies.length > 0 ? (
                apologies.map((apology: any, index: number) =>
                    <React.Fragment key={index}>
                        <Apology apology={apology} />
                    </React.Fragment>
                )):
                <p>Chargement des excuses...</p>
        }
    </>;
}
