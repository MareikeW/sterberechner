import React from "react";
import avatar from "../avatar.png";

const Infobox = ({ infoText }) => {
    return (
        <div className="info__container">
            <div className="info-avatar">
                <img src={avatar} alt="Avatar" />
            </div>
            <div className="sprechblase">
                <p className="info-text">{infoText}</p>
            </div>
        </div>
    )
}

export default Infobox;