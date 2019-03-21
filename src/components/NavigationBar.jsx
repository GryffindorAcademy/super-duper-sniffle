//////////////////////////////////////////////////////////////////////////////
// Navbar used across site, mobile and site Nav will render upon page width //
//////////////////////////////////////////////////////////////////////////////
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const MobileNav = () => (
  <div className="dropbtn">
    <a className="dropbtnIcon">
      <FontAwesomeIcon icon="bars" size="5x" />
    </a>
    <div className="dropdownContent">
      <Link to="/Team">Team</Link>
      <Link to="/VisitAfrica">Visit Africa</Link>
      <Link to="/Donate">Donate</Link>
      <Link to="/">Home</Link>
    </div>
  </div>
);

const WebNav = () => (
  <div className="navigation__list">
    <div className="navigation__item">
      <Link className="navigation__link" to="/Team">
        Team
      </Link>
    </div>
    <div className="navigation__item">
      <Link className="navigation__link" to="/VisitAfrica">
        Visit Africa
      </Link>
    </div>
    <div className="navigation__item">
      <Link className="navigation__linkDonate" to="/Donate">
        Donate
      </Link>
    </div>
  </div>
);

const NavigationBar = () => (
  <nav className="navigation">
    <div className="navigation__logo">
      <Link className="navigation__linkMain" to="/">
        Jijenge
      </Link>
    </div>
    {/* MOBILE */}
    <MobileNav />
    {/* WEB */}
    <WebNav />
  </nav>
);

export default NavigationBar;
