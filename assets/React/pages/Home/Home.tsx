import React, { useState } from "react";
import { APP_TITLE } from "../../../const";
import ButtonGenerateApology from "./ButtonGenerateApology";

export default function() {
    const [apology, setApology] = useState("");

    return <div className="align_center">
        <h1 className="mb_40">{ APP_TITLE }</h1>
        <p>{ apology.length > 0 ? apology : "Chargement de la phrase" }</p>
        <ButtonGenerateApology setApology={setApology} />
    </div>;
}
