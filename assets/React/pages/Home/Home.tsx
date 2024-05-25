import React, { useState } from "react";
import { APP_TITLE } from "../../../const";
import ButtonGenerateApology from "./ButtonGenerateApology";
import { FaCirclePlus } from "react-icons/fa6";
import { Tooltip } from 'react-tooltip'
import Modal from "../../Components/Modal/Modal";
import AddApology from "../../Components/Apology/AddApology";

export default function() {
    const [apology, setApology] = useState("");
    const [visibleModal, setVisibleModal] = useState(false);

    const handleClickVisibleModal = e => {        
        if(e && visibleModal) {
            if(e.target.classList.contains("toggle_modal")) {
                setVisibleModal(!visibleModal);
            }
            return;
        }
        setVisibleModal(!visibleModal);
    }

    return <>
        <div className="align_center">
            <h1 className="app_title mb_40">{ APP_TITLE }</h1>
            <p className="mb_20" style={{"marginBottom": "2000px"}}>{ apology.length > 0 ? apology : "Chargement de la phrase" }</p>
            <ButtonGenerateApology setApology={setApology} />
        </div>
        <div className="add" onClick={handleClickVisibleModal}>
            <FaCirclePlus data-tooltip-id="add-tooltip" data-tooltip-content="Ajouter" />
            <Tooltip id="add-tooltip" />
        </div>
        <Modal visible={visibleModal} setVisible={handleClickVisibleModal}>
            <AddApology successCallback={handleClickVisibleModal} />
        </Modal>
    </>;
}
