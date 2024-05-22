import React from "react";
import { useParams } from "react-router-dom";
import Error404 from "../Errors/Error404";

export default function() {
    const param = useParams();
    
    const idMessage = param.http_code;

    if(!idMessage.match(/^\d{3}$/)) {
        return <Error404 />;
    }

    

    return <p>Tous les messages</p>;
}
