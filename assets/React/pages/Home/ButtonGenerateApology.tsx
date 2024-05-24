import ky from "ky";
import React, { useState, useEffect } from "react";
import { Oval } from "react-loader-spinner";

export default function({ setApology }: { setApology: (param: any) => void }) {
    const [apologies, setApologies] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        ky.get("/api/apologies", {
            headers: {
                "Accept": "application/ld+json"
            },
        })
        .json()
        .then(res => {
            getRandomApology(res["hydra:member"], false);
        });

    }, []);

    const getRandomApology = (_apologies: any, delay: boolean) => {
        if(loading || _apologies.length <= 0) {
            return;
        }

        // Génération d'un numéro aléatoire pour piocher de façon aléatoirement dans le tableau passé en paramètre
        const delayNumber: number|null = (delay ? Math.floor(Math.random() * (5 - 1 + 1) + 1) * 1000 : null);        

        setApology("");
        setLoading(true);

        setTimeout(() => {
            // Génération d'un numéro aléatoire pour piocher de façon aléatoirement dans le tableau passé en paramètre
            const number: number = Math.floor(Math.random() * _apologies.length);

            // Passage de l'excuse trouvée au composent parent
            setApology(_apologies[number].message);

            // Suppression afin de ne plus retomber dessus pendant cette pioche
            delete _apologies[number];

            // Filtre du tableau après la suppression pour obtenir un tableau sans objet vide
            _apologies = _apologies.filter((test: any) => test);

            // Mise à jour de la pioche
            setApologies(_apologies);
            setLoading(false);
        }, delayNumber);
    }

    // Fonction appelée lors du clique pour générer une nouvelle phrase
    const handleClick = () => {
        getRandomApology(apologies, true);
    }

    return <button className="app_btn" disabled={loading} onClick={handleClick}>
        {loading ?
            <Oval
                height="26"
                width="26"
                color="#4fa94d"
                ariaLabel="oval-loading"
                wrapperClass="align_center"
            /> :
            "Générer" 
        }
    </button>;
}
