/////////////////////////////////
// Rendered upon the Home page //
/////////////////////////////////
import React, { Component } from "react";

export default class Action extends Component {
  constructor(props) {
    super(props);
  }

  handleDonation() {
    this.props.history.push("/Donate");
  }

  render() {
    return (
      <section className="section-action__content">
        <h3 className="primaryHeading">
          Leveling the educational playing field
        </h3>
        <h3 className="secondaryHeading">
          Education has the power to democratize opportunity.
        </h3>
        <h3 className="secondaryHeading">
          Education improves community health and reduces needless human
          suffering
        </h3>
        <button
          className="section-action__content--btn"
          onClick={this.handleDonation.bind(this)}
        >
          Give Education
        </button>
      </section>
    );
  }
}
