import axios from "axios";
import React, { useState, useEffect } from "react";
import { Oval } from "react-loader-spinner";

export default function({ setApology }) {
    const [apologies, setApologies] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        axios.get("/api/apologies")
        .then(res => {
            getRandomApology(res.data["hydra:member"], false);
        });

    }, []);

    const getRandomApology = (_apologies: any, delay: boolean) => {
        if(loading || _apologies.length <= 0) {
            return;
        }

        // Génération d'un numéro aléatoire pour piocher de façon aléatoirement dans le tableau passé en paramètre
        const delayNumber: number = delay ? Math.floor(Math.random() * (5 - 1 + 1) + 1) * 1000 : 0;        

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

    return <button disabled={loading} onClick={handleClick}>
        {loading ?
            <Oval
                height="20"
                width="20"
                color="#4fa94d"
                ariaLabel="oval-loading"
                wrapperClass="align_center"
            /> :
            'Générer' 
        }
    </button>;
}
