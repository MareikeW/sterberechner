import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

import Geburtstag from "./pages/geburtstag";
import Versicherungssumme from "./pages/versicherungssumme";
import Ergebnis from "./pages/ergebnis";

function App() {
  const [geburtstag, setGeburtstag] = useState();
  const [geburtsmonat, setGeburtsmonat] = useState();
  const [geburtsjahr, setGeburtsjahr] = useState();

  const [versicherungssumme, setVersicherungssumme] = useState(8000);

  

  return (
      <div>
        <Router>
          <Switch>
            <Route path="/rechner/geburtstag">
              <Geburtstag 
                tag={geburtstag} 
                monat={geburtsmonat} 
                jahr={geburtsjahr}
                setTag={setGeburtstag}
                setMonat={setGeburtsmonat}
                setJahr={setGeburtsjahr}
              />
            </Route>
              
            <Route path="/rechner/versicherungssumme">
              <Versicherungssumme 
                summe={versicherungssumme}
                setSumme={setVersicherungssumme}
              />
            </Route>
              
            <Route path="/rechner/ergebnis">
              <Ergebnis 
                summe={versicherungssumme}
                datum={`${geburtstag}.${geburtsmonat}.${geburtsjahr}`}
              />
            </Route>
          </Switch>
        </Router>

        <div>
          {/*{geburtstag}.{geburtsmonat}.{geburtsjahr}
          <br />
  {versicherungssumme}*/}
        </div>
      </div>
  );
}

export default App;
