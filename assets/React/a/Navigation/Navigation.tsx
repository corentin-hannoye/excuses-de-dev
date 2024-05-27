import React from "react";
import { NavLink } from "react-router-dom";
import { ADD_APOLOGY_URL, APOLOGIES_URL, HOME_URL } from "../../../const";

export default function() {
    return <nav>
        <ul>
            <li><NavLink to={HOME_URL}>Accueil</NavLink></li>
            <li><NavLink to={APOLOGIES_URL}>Excuses</NavLink></li>
            <li><NavLink to={ADD_APOLOGY_URL}>Ajouter</NavLink></li>
        </ul>
    </nav>;
}
