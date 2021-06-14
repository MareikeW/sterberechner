import React from "react";
import { Link } from "react-router-dom";

import Infobox from "../components/Infobox";

const Versicherungssumme = ({ summe, setSumme }) => {

    return (
        <div>
            <Link to="/rechner/geburtstag">
                <button>&#x3C;</button>
            </Link>
            
            <h1>Wie hoch soll die <strong>Versicherungssumme</strong> sein?</h1>

            <div>
                <input 
                    type="range" 
                    min="4000" 
                    max="15000" 
                    value={summe} 
                    onChange={event => setSumme(event.target.value)} 
                />
            
            </div>

            <Infobox infoText="..."/>
            
            <Link to="/rechner/ergebnis"><button>Weiter</button></Link>

        </div>
    )
}

export default Versicherungssumme;