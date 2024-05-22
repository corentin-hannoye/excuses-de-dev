import React from "react";
import { APP_TITLE } from "../../../const";

export default function() {
    return <>
        <h1 className="mb_40">{ APP_TITLE }</h1>
        <p>Phrase</p>
        <button>Générer</button>
    </>;
}
