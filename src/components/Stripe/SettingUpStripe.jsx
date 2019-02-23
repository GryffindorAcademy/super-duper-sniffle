//////////////////////////////////////////////////////////////////////////////////
// Rendered from Application.jsx which returns the Donate page ready for Stripe //
//////////////////////////////////////////////////////////////////////////////////
import React, { Component } from "react";
import { Elements } from "react-stripe-elements";
import Form from "../Donate/Form.jsx";

class SettingUpStripe extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Elements>
        <Form history={this.props.history} />
      </Elements>
    );
  }
}

export default SettingUpStripe;
