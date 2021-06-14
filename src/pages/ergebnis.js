import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Ergebnis = ({ summe, datum }) => {
    const [betrag, setBetrag] = useState();
    const [zahlungsweise, setZahlungsweise] = useState("monatlich");

    useEffect(() => {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "bipro": "2.1.1.1.6"
            },
            body: JSON.stringify({
                "tarif": {
                    "name": "sterbegeld"
                  },
                  "versicherungsnehmer": {
                    "geburtsdatum": datum,
                    "geschlecht": "m"
                  },
                  "vertragsdaten": {
                    "endalter": 85,
                    "versicherungsbeginn": "01.10.2021",
                    "versicherungssumme": summe,
                    "zahlungsweise": "monatlich"
                  }
            })
        }

        fetch("https://t3a.hannoversche.de/api/v2/taa/quote", options)
        .then((response => response.json()))
        .then((data) => setBetrag(data))
    }, [summe, datum])

    function getBetrag() {
      if (betrag) {
        let result;

        switch(zahlungsweise) {
          case "jährlich":
            result = betrag.hauptprodukt.sterbegeld.beitraege.jaehrlich.netto;
            break;
          default:
            result = betrag.hauptprodukt.sterbegeld.beitraege.monatlich.netto;
            break;
        }
  
        return result.toLocaleString("de-DE", {style: "currency", currency: "EUR"});
      }    
    }

    return (
        <div>
            <div className="button-zurueck__container">
              <Link to="/rechner/versicherungssumme">
                  <button className="button__zurueck">&#x3C;</button>
              </Link>
            </div>
            <p>
              <strong>
                {betrag ? getBetrag() : "Lädt..."}
              </strong>
            </p>
            <p>{zahlungsweise}</p>
            {/*<pre>{JSON.stringify(betrag, null, 2)}</pre>*/}
            <div>
              <h1>Ihre Sterbegeldversicherung</h1>
              <p>Sie zahlen <strong>{zahlungsweise} {getBetrag()} zur Entlastung Ihrer Hinterbliebenen.</strong></p>
              <div>
                <label htmlFor="zahlungsweise" >Zahlungsweise</label>
                <select 
                  id="zahlungsweise"
                  onChange={(event) => setZahlungsweise(event.target.value)}>
                  <option>monatlich</option>
                  <option>jährlich</option>
                </select>
              </div>
            </div>
        </div>
    )
}

export default Ergebnis;

/*

https://t3a.hannoversche.de/api/v2/taa/quote

Um mit der API zu sprechen, musst Du einen POST-Request mit folgender
Beispielpayload mit Content-Type "application/json" und zusätzlichem Header
"bipro: 2.1.1.1.6"senden (z.B. mit curl auf der Kommandozeile für erste Versuche):
curl --location --request POST 'https://t3a.hannoversche.de/api/v2/taa/quote' \
--header 'bipro: 2.1.1.1.6' \
--header 'Content-Type: application/json' \
--data-raw '{
  "tarif": {
    "name": "sterbegeld"
  },
  "versicherungsnehmer": {
    "geburtsdatum": "18.02.1973",
    "geschlecht": "m"
  },
  "vertragsdaten": {
    "endalter": 85,
    "versicherungsbeginn": "01.10.2021",
    "versicherungssumme": 8000,
    "zahlungsweise": "monatlich"
  }
}'


Als Antwort erhältst Du dann z.B. folgende Preisberechnung:
{
  "biproVersion": "2.1.1.1.6",
  "beginn": "01.10.2021",
  "werbeangebotsnummer": "20211651234269774118",
  "hauptprodukt": {
    "sterbegeld": {
      "bezeichnung": "L6-Plus",
      "kurzbeschreibung": "Sterbegeldversicherung-Plus",
      "beitraege": {
        "monatlich": {
          "netto": 28.9,
          "brutto": 28.9
        },
        "vierteljaehrlich": {
          "netto": 85.53,
          "brutto": 85.53
        },
        "halbjaehrlich": {
          "netto": 169.9,
          "brutto": 169.9
        },
        "jaehrlich": {
          "netto": 335.12,
          "brutto": 335.12
        }
      },
      "leistungen": {
        "einmalig": {
          "ablaufleistung": {
            "garantiert": {
              "betrag": 8000
            }
          },
          "todesfallleistung": {
            "garantiert": {
              "betrag": 8000
            }
          }
        }
      }
    }
  },
  "zusatzprodukte": {},
  "status": {
    "ok": true
  }
}

*/