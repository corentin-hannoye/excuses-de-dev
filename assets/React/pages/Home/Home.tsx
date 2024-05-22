import React, { useState } from "react";
import { APP_TITLE } from "../../../const";
import ButtonGenerateApology from "./ButtonGenerateApology";

export default function() {
    const [apology, setApology] = useState(null);

    return <>
        <h1 className="mb_40">{ APP_TITLE }</h1>
        <p>{ apology ?? "Chargement de l'excuse..." }</p>
        <ButtonGenerateApology />
    </>;
}
