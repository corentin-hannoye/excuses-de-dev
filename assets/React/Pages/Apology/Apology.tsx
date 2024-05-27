import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Error404 from "../Errors/Error404";
import Apology from "../../Components/Apology/Apology";
import { findApologyByHttpCode, findOneHttpCodeByCode } from "../../Services/API/API";

export default function() {
    // Récupération du paramètre passé dans l'URL
    const param = useParams();
    const httpCodeValue = param.http_code;

    // Vérification de son paterne
    if(!httpCodeValue.match(/^\d{3}$/)) {
        return <Error404 />;
    }

    const [loading, setLoading] = useState(true);
    const [apology, setApology] = useState(null);

    // Vérification du code passé en paramètre + get du message associé
    useEffect(() => {

        (async () => {

            const httpCode = await findOneHttpCodeByCode(parseInt(httpCodeValue));

            if(httpCode) {
                const apology = await findApologyByHttpCode(httpCode.id);

                setApology(apology);
            }

            setLoading(false);

        })();

    }, []);

    return <>
        {loading ?
            <p>Chargement...</p> :
            apology ?
                apology.map((apology: any, i: number) => (
                    <React.Fragment key={i}>
                        <Apology apology={apology} />
                    </React.Fragment>
                )) :
                <>
                    <h1 className="mb_40">Erreur</h1>
                    <p>0 message trouvé associé au code HTTP { httpCodeValue }</p>
                </>
        }
    </>;
}
