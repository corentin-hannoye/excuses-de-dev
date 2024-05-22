import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Error404 from "../Errors/Error404";
import axios from "axios";

export default function() {
    const param = useParams();
    const idMessage = param.http_code;

    if(!idMessage.match(/^\d{3}$/)) {
        return <Error404 />;
    }

    const [message, setMessage] = useState();

    useEffect(() => {
        axios.get(`/api/http_codes?code=${idMessage}`)
        .then(res => {
            
            if(res.data["hydra:member"].length == 0) {
                return;
            }

            axios.get(`/api/apologies?http_code=/api/http_codes/${res.data["hydra:member"][0].id}`)
            .then(res => {

                if(res.data["hydra:member"].length == 0) {
                    return;
                }
                setMessage(res.data["hydra:member"][0]);
            });
        });
    }, []);

    return <>
        <p>{ message ? message.message : 'Chargement...' }</p>
    </>;
}
