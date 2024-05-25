import React, { useState } from "react";
import { APP_TITLE } from "../../../const";
import ButtonGenerateApology from "./ButtonGenerateApology";
import { FaCirclePlus } from "react-icons/fa6";
import { Tooltip } from 'react-tooltip'

export default function() {
    const [apology, setApology] = useState("");

    return <div className="align_center">
        <h1 className="app_title mb_40">{ APP_TITLE }</h1>
        <p className="mb_20">{ apology.length > 0 ? apology : "Chargement de la phrase" }</p>
        <ButtonGenerateApology setApology={setApology} />
        <div className="add">
            <FaCirclePlus data-tooltip-id="add-tooltip" data-tooltip-content="Ajouter" />
            <Tooltip id="add-tooltip" />
        </div>
    </div>;
}
