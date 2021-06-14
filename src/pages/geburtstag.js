import React from "react";
import { Link } from "react-router-dom";

import Infobox from "../components/Infobox";

const Geburtstag = ({ tag, monat, jahr, setTag, setMonat, setJahr }) => {
    function isValid() {
        const geburtsDatum = new Date(jahr, Number(monat) - 1, tag);
        const today = new Date();

        let alter = (today.getTime() - geburtsDatum.getTime())/(1000 * 60 * 60 * 24 * 365);
        
        return (alter >= 50 && alter <= 80);
    }

    return (
        <div className="geburtstags__container">
            <h1>Zum Start benötigen wir <strong>Ihr Geburtsdatum</strong></h1>

            <form className="geburtstags__form">
                <input 
                    type="number"
                    placeholder="TT" 
                    value={tag} 
                    className={`geburtstags__input--kurz ${(tag >= 1 && tag <= 31) ? console.log("kein error") : console.log("error")}`}
                    min="1" 
                    max="31" 
                    onChange={event => setTag(event.target.value)} 
                    required
                />

                <input 
                    type="number" 
                    placeholder="MM"
                    value={monat} 
                    className={`geburtstags__input--kurz ${(monat >= 1 && monat <= 12) ? console.log("kein error") : console.log("error")}`} 
                    min="1" 
                    max="12"
                    onChange={event => setMonat(event.target.value)} 
                    required
                />

                <input 
                    type="number" 
                    placeholder="JJJJ" 
                    value={jahr}
                    className={`${(jahr >= 1940 && jahr <= 1971) ? console.log("kein error") : console.log("error")}`} 
                    min="1941"
                    max="1971" 
                    onChange={event => setJahr(event.target.value)} 
                    required
                />
            </form>

            <Infobox infoText="Ich weiß, nach dem Alter fragt man eigentlich nicht, aber die Beitragshöhe für die
            Sterbegeldversicherung richtet sich nach Ihrem Alter bei Vertragsabschluss."/>

            <Link to="/rechner/versicherungssumme">
                <button className="button__weiter" disabled={!isValid()}>Weiter</button>
            </Link>
        </div>
    )
}

export default Geburtstag;