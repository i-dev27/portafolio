import React from "react";
import Projects from "./components/Projects.jsx";
import Agency from "./components/Agency.jsx";

import "./App.css";
import { Link, BrowserRouter, Route } from "react-router-dom";
import Contact from "./components/Contact.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="Logo">
        <img src="./images/Logois.svg" alt="Logo Image" className="logo" />
      </div>
      <div className="navigation">
        <div className="navigation-sub">
          <Link to="/" className="item">
            Projects
          </Link>

          <Link to="/Agency" className="item">
            Agency
          </Link>
          <Link to="/Contact" className="item">
            Contact
          </Link>
        </div>
      </div>
      <div className="App">
        <Route exact path="/" component={Projects} />
        <Route path="/Agency" component={Agency} />
        <Route path="/Contact" component={Contact} />
      </div>
    </BrowserRouter>
  );
}

export default App;
