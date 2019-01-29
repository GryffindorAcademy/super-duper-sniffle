//////////////////////////////////////////////////////////////////
// Terms rendered within Donate page, seperated for readability //
//////////////////////////////////////////////////////////////////
import React, { Component, Fragment } from "react";

class Terms extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Fragment>
        <label className="donationForm__formLabel">
          By clicking, you agree to <a href="#terms">our terms</a> and
          conditions.
        </label>
        <section id="terms" className="termsandconditions">
          <div className="termsandconditions__content">
            <div className="termsandconditions__right">
              <a href="#section-donation" className="termsandconditions__close">
                &times;
              </a>
            </div>
            <div className="termsandconditions__left">
              “Jijenge Academy is a Delaware nonprofit corporation. Its
              application for federal recognition of section 501(c)(3)
              charitable status is in process.”
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Terms;
