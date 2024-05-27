import React, { useEffect, useRef } from "react";

export default function ({ visible, setVisible, children }: { visible: boolean, setVisible: (e: any) => void, children: React.Element }): React.JSX.Element {
    const modalElement = useRef();

    useEffect(() => {
        if(visible) {
            document.body.classList.add("modal_open");
        } else {
            document.body.classList.remove("modal_open");
        }
    }, [visible]);

    return <div className={"modal" + (visible ? " show" : "")}>
        <div className="modal_bg"></div>
        <div ref={modalElement} className="modal_container toggle_modal" onMouseDown={setVisible}>
            <div className="modal_content">
                { children }
            </div>
        </div>
    </div>;
}
