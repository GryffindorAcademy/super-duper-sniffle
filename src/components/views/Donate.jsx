//////////////////////////////////////////////////////////////////////////
// Donate page, was refactored together from two different donate pages //
//////////////////////////////////////////////////////////////////////////
import React, { Component } from "react";
import Footer from "../Footer/Footer.jsx";
import { StripeProvider } from "react-stripe-elements";
import { stripeKey } from "../../data/stripeKeys";
import SettingUpStripe from "../Stripe/SettingUpStripe.jsx";
import donate1 from "../../images/donateMonthly1.jpg";
import donate2 from "../../images/donateMonthly2.jpg";
import ScrollToTop from "../ScrollToTop.jsx";

class Donate extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main className="donateBackground">
        <ScrollToTop />
        <header className="donateBackground__heading">
          <h3 className="primaryHeading">Thank you for your donation</h3>
          <h3 className="secondaryHeading">
            100% of your money empowers students through education
          </h3>
        </header>
        <section className="row">
          <div className="col-1-of-2">
            <StripeProvider stripe={this.props.stripe} apiKey={stripeKey}>
              <SettingUpStripe {...this.props} />
            </StripeProvider>
          </div>
          <div className="col-1-of-2 composition">
            <img
              className="composition__photo composition__photo--p1"
              src={donate1}
            />
            <img
              className="composition__photo composition__photo--p2"
              src={donate2}
            />
          </div>
        </section>
        <Footer />
      </main>
    );
  }
}

export default Donate;
