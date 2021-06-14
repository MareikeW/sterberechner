import React from "react";
import { Link } from "react-router-dom";

import Infobox from "../components/Infobox";

const Geburtstag = ({ tag, monat, jahr, setTag, setMonat, setJahr }) => {
    return (
        <div>
            <h1>Zum Start benötigen wir <strong>Ihr Geburtsdatum</strong></h1>

            <form>
                <input type="text" value={tag} onChange={event => setTag(event.target.value)} />

                <input type="text" value={monat} onChange={event => setMonat(event.target.value)} />

                <input type="text" placeholder="JJJJ" value={jahr} onChange={event => setJahr(event.target.value)} />
            </form>

            <Infobox infoText="Ich weiß, nach dem Alter fragt man eigentlich nicht, aber die Beitragshöhe für die
            Sterbegeldversicherung richtet sich nach Ihrem Alter bei Vertragsabschluss."/>

            <Link to="/rechner/versicherungssumme">
                <button>Weiter</button>
            </Link>
        </div>
    )
}

export default Geburtstag;