import React from "react";
import { NavLink } from "react-router-dom";
import { HOME_URL } from "../../../const";

export default function() {
    return <>
        <h1 className="mb_40">Error 404</h1>
        <p>Revenir à <NavLink to={HOME_URL}>l'accueil</NavLink></p>
    </>;
}
