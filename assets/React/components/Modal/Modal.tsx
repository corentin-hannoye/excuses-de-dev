import React, { useEffect, useRef } from "react";

export default function(props) {

    const modalElement = useRef();

    useEffect(() => {
        if(props.visible) {
            document.body.classList.add("modal_open");
        } else {
            document.body.classList.remove("modal_open");
        }
    }, [props.visible]);

    return <div className={"modal" + (props.visible ? " show" : "")}>
        <div className="modal_bg"></div>
        <div ref={modalElement} className="modal_container toggle_modal" onClick={props.setVisible}>
            <div className="modal_content">
                { props.children }
            </div>
        </div>
    </div> 
}
