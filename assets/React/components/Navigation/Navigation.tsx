import React from "react";
import { NavLink } from "react-router-dom";
import { APOLOGIES_URL, HOME_URL } from "../../../const";

export default function() {
    return <nav>
        <ul>
            <li><NavLink to={HOME_URL}>Accueil</NavLink></li>
            <li><NavLink to={APOLOGIES_URL}>Excuses</NavLink></li>
        </ul>
    </nav>;
}
