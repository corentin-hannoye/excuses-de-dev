import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Error404 from "../Errors/Error404";
import axios from "axios";

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
        axios.get(`/api/http_codes?code=${idMessage}`)
        .then(res => {

            if(res.data["hydra:member"].length == 0) {
                setLoading(false);
            }

            axios.get(`/api/apologies?http_code=/api/http_codes/${res.data["hydra:member"][0].id}`)
            .then(res => {

                if(res.data["hydra:member"].length > 0) {
                    setApology(res.data["hydra:member"]);
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
                    <p>{ i.message }</p>
                )) :
                <p>0 message trouvé associé au code HTTP { idMessage }</p>
        }
    </>;
}
