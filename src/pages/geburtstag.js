import React from "react";
import { Link } from "react-router-dom";

import Infobox from "../components/Infobox";

const Geburtstag = ({ tag, monat, jahr, setTag, setMonat, setJahr }) => {
    
    function isValid() {
        const geburtsDatum = new Date(jahr, Number(monat) + 1.4, Number(tag) - 40);
        const today = new Date();

        const alter = (today.getTime() - geburtsDatum.getTime())/(1000 * 60 * 60 * 24 * 365);
        
        return (alter >= 49.9769 && alter <= 80);
    }

    function isValidDay(event) {
        let day = event.target.value;
        if (day >= 1 && day <= 31) {
            setTag(day)
        } else {
            setTag("");
        }
    }

    function isValidMonth(event) {
        let month = event.target.value;
        if (month >= 1 && month <= 12) {
            setMonat(month);
        } else {
            setMonat("");
        }
    }

    function isValidYear(event) {
        let year = event.target.value;

        if (year >= 1972) {
            setJahr("")
        } else {
            setJahr(year)
        }
    }

    return (
        <div className="geburtstags__container">
            <h1>Zum Start benötigen wir <strong>Ihr Geburtsdatum</strong></h1>

            <form className="geburtstags__form">
                <input 
                    type="number"
                    placeholder="TT" 
                    value={tag} 
                    className={`geburtstags__input--kurz ${tag ? "input--background" : ""}`} 
                    onChange={event => isValidDay(event)} 
                    required
                />

                <input 
                    type="number" 
                    placeholder="MM"
                    value={monat} 
                    className={`geburtstags__input--kurz ${monat ? "input--background" : ""}`} 
                    onChange={event => isValidMonth(event)} 
                    required
                />

                <input 
                    type="number" 
                    placeholder="JJJJ" 
                    value={jahr} 
                    className={`${jahr ? "input--background" : ""}`}
                    onChange={event => isValidYear(event)} 
                    max="1971"
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