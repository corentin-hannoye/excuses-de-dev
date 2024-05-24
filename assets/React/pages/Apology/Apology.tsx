import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Error404 from "../Errors/Error404";
import ky from "ky";
import Apology from "../../Components/Apology/Apology";

export default function() {
    // Récupération du paramètre passé dans l'URL
    const param = useParams();
    const idMessage = param.http_code;

    // Vérification de son paterne
    if(!idMessage.match(/^\d{3}$/)) {
        return <Error404 />;
    }

    const [loading, setLoading] = useState(true);
    const [apology, setApology] = useState(null);

    // Vérification du code passé en paramètre + get du message associé
    useEffect(() => {
        ky.get(`/api/http_codes?code=${idMessage}`, {
            headers: {
                "Accept": "application/ld+json"
            },
        })
        .json()
        .then(res => {

            if(res["hydra:member"].length == 0) {
                setLoading(false);
            }

            ky.get(`/api/apologies?http_code=/api/http_codes/${res["hydra:member"][0].id}`)
            .then(res => {

                if(res["hydra:member"].length > 0) {
                    setApology(res["hydra:member"]);
                }
                setLoading(false);
            });
        });
    }, []);

    return <>
        {loading ?
            <p>Chargement...</p> :
            apology ?
                apology.map((i: any) => (
                    <React.Fragment>
                        <Apology apology={i} />
                    </React.Fragment>
                )) :
                <>
                    <h1 className="mb_40">Erreur</h1>
                    <p>0 message trouvé associé au code HTTP { idMessage }</p>
                </>
        }
    </>;
}
