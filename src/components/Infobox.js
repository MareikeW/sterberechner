import React from "react";

const Infobox = ({ infoText }) => {
    return (
        <div className="info__container">
            <div className="info-avatar">Avatar</div>
            <p className="info-text">{infoText}</p>
        </div>
    )
}

export default Infobox;