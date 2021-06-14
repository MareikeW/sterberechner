import React from "react";

const Infobox = ({ infoText }) => {
    return (
        <div className="info__container">
            <div className="infoAvatar">Avatar</div>
            <p>{infoText}</p>
        </div>
    )
}

export default Infobox;