import React, { Component } from "react";

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  handleDonation() {
    this.props.history.push("/Donate");
  }

  render() {
    return (
      <header className="header">
        <div className="header__background" />
        <section className="header__heading">
          <h3 className="primaryHeading">
            Building dreams for those without means
          </h3>
          <h3 className="secondaryHeading">
            100% of donations educate students
          </h3>
          <div
            className="header__heading--donate"
            onClick={this.handleDonation.bind(this)}
          >
            Give Monthly
          </div>
        </section>
        <section className="header__greeting">
          <h3 className="primaryHeading">Welcome to Jijenge</h3>
          <h3 className="secondaryHeading">
            We're an East Africa-focused, digital skills vocational program{" "}
          </h3>
          <h3 className="secondaryHeading">
            that trains students to achieve technology careers regardless of
            their background.{" "}
          </h3>
          <h3 className="secondaryHeading">
            We believe education empowers and creates lasting change within a
            community
          </h3>
        </section>
      </header>
    );
  }
}
