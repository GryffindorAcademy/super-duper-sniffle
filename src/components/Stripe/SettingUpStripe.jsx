//////////////////////////////////////////////////////////////////////////////////
// Rendered from Application.jsx which returns the Donate page ready for Stripe //
//////////////////////////////////////////////////////////////////////////////////
import React, { Component } from "react";
import { Elements } from "react-stripe-elements";
import Donate from "../views/Donate.jsx";

class SettingUpStripe extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Elements>
        <Donate history={this.props.history} />
      </Elements>
    );
  }
}

export default SettingUpStripe;
