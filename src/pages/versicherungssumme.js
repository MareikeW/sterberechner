import React from "react";
import { Link } from "react-router-dom";

import Infobox from "../components/Infobox";

const Versicherungssumme = ({ summe, setSumme }) => {

    return (
        <div>
            <Link to="/rechner/geburtstag">
                <button className="button__zurueck">&#x3C;</button>
            </Link>
            
            <h1>Wie hoch soll die <strong>Versicherungssumme</strong> sein?</h1>
            
            <div>
                <label>{summe.toLocaleString("de-DE", {style: "currency", currency: "EUR"})}</label>
                <br />
                <label>4.000 €</label>
                <input 
                    type="range" 
                    min="4000" 
                    max="15000" 
                    value={summe} 
                    onChange={event => setSumme(parseInt(event.target.value))}
                    step="1000" 
                />
                <label>15.000 €</label>
            </div>

            <Infobox infoText="Sie sind sich unsicher, wie hoch die Versicherungssumme sein sollte?
            Hier eine kleine Orientierungshilfe: Laut Statistik liegen Bestattungskosten durchschnittlich bei
            6.000 bis 8.000 Euro. Plus ggf. weiterer Kosten für Wohnungsauflösung, Grabpflege oder einen Notar.👆"/>
            
            <Link to="/rechner/ergebnis"><button className="button__weiter">Weiter</button></Link>

        </div>
    )
}

export default Versicherungssumme;