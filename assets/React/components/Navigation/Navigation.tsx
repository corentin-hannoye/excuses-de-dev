import React from "react";
import { NavLink } from "react-router-dom";
import { APOLOGIES_URL, HOME_URL } from "../../../const";

export default function() {
    return <nav>
        <NavLink to={HOME_URL}>Accueil</NavLink>
        <NavLink to={APOLOGIES_URL}>Excuses</NavLink>
    </nav>;
}
