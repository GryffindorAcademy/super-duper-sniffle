////////////////////////////////////
// Footer rendered upon Home page //
////////////////////////////////////
import React, { Component } from "react";
import EmailPopup from "./EmailPopup.jsx";

export default class Footer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <footer className="footer">
        <h3 className="footer__logo">Jijenge</h3>
        <div className="footer__container">
          <section className="footer__container--application">
            <div>Jijenge is a 501(c)(3)</div>
            <div>not for profit</div>
            <div>organization</div>
          </section>
          <section className="footer__container--social">
            <div className="footer__container--social-email">
              <EmailPopup />
            </div>
          </section>
          <section className="footer__container--form">
            <div>115 Kingston St. Floor 6</div>
            <div>Boston, MA 02111</div>
          </section>
        </div>
      </footer>
    );
  }
}
