import React, { useState, useEffect } from "react";
import axios from "axios";

export default function() {
    const [apologies, setApologies] = useState([]);

    useEffect(() => {
        
        axios.get('/api/apologies')
        .then(res => {
            setApologies(res.data['hydra:member']);
        })

    }, []);

    return <>
        {apologies.map(apologie => (
            <p>{apologie.message}</p>
        ))}
    </>;
}
