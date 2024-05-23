import React from "react";

export default function({ apology }) {
    return <div className="apology_item">
        <div className="flex flex_w gap_10 mb_10">
            <span className="code">{ apology.http_code.code }</span>
            <span className="tag">{ apology.tag.libelle }</span>
        </div>
        <p>{ apology.message }</p>
    </div>;
}
