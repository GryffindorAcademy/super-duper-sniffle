import React, { Component } from "react";
import Footer from "../Footer.jsx";
import visit from "../../images/visit.jpg";
import visit1 from "../../images/visit1.jpg";
import visit2 from "../../images/visit2.jpg";
import visit3 from "../../images/visit3.jpg";
import visit4 from "../../images/visit4.jpg";
import visit5 from "../../images/visit5.jpg";
import visit6 from "../../images/visit6.jpg";

import africa1 from "../../images/africa1.jpg";
import africa2 from "../../images/africa2.jpg";
import africa4 from "../../images/africa4.jpg";
import africa6 from "../../images/africa6.jpg";
import africa8 from "../../images/africa8.jpg";
import africa9 from "../../images/africa9.jpg";

import ScrollToTop from "../ScrollToTop.jsx";

export default class VisitAfrica extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meet: [visit, visit1, visit2, visit3, visit4, visit5, visit6],
      meetCurrent: 0,
      africa: [africa1, africa2, africa4, africa6, africa8, africa9],
      expAfrica: 0
    };
  }

  handleNextMeetArrow() {
    if (this.state.meetCurrent === this.state.meet.length - 1) {
      this.setState({
        meetCurrent: 0
      });
    } else {
      this.setState({
        meetCurrent: this.state.meetCurrent + 1
      });
    }
  }

  handlePrevMeetArrow() {
    if (this.state.meetCurrent === 0) {
      this.setState({
        meetCurrent: this.state.meet.length - 1
      });
    } else {
      this.setState({
        meetCurrent: this.state.meetCurrent - 1
      });
    }
  }

  handleNextAfricaArrow() {
    if (this.state.expAfrica === this.state.africa.length - 1) {
      this.setState({
        expAfrica: 0
      });
    } else {
      this.setState({
        expAfrica: this.state.expAfrica + 1
      });
    }
  }

  handlePrevAfricaArrow() {
    if (this.state.expAfrica === 0) {
      this.setState({
        expAfrica: this.state.africa.length - 1
      });
    } else {
      this.setState({
        expAfrica: this.state.expAfrica - 1
      });
    }
  }

  render() {
    return (
      <div>
        <ScrollToTop />
        <div className="visitHeader">
          <div className="visitBanner">
            <div className="primaryHeading">An inspiration vacation</div>
            <div className="secondaryHeading">
              Book a life changing visit to the children at Jijenge @ Nairobi.
            </div>
            <div className="secondaryHeading">
              Meet the children yourself while experiencing the world's best
              Safari tours and beach vacations!
            </div>
            <div className="visitBanner__container">
              <a
                href="http://eepurl.com/dH3L6b"
                className="visitBanner__container--btn"
              >
                Tailor a trip to Kenya
              </a>
            </div>
          </div>
        </div>
        <section className="section-slides">
          <div className="section-slides__heading">
            <div className="primaryHeading">Meet the children</div>
          </div>
          <div className="slideshow-container">
            <div className="mySlides fade">
              <img
                className="image"
                src={this.state.meet[this.state.meetCurrent]}
              />
            </div>
            <div className="prev" onClick={this.handlePrevMeetArrow.bind(this)}>
              &#10094;
            </div>
            <div className="next" onClick={this.handleNextMeetArrow.bind(this)}>
              &#10095;
            </div>
          </div>
        </section>

        <section className="section-slides">
          <div className="section-slides__heading">
            <div className="primaryHeading">Experience Africa</div>
          </div>
          <div className="slideshow-container">
            <div className="mySlides fade">
              <img
                className="image"
                src={this.state.africa[this.state.expAfrica]}
              />
            </div>
            <div
              className="prev"
              onClick={this.handlePrevAfricaArrow.bind(this)}
            >
              &#10094;
            </div>
            <div
              className="next"
              onClick={this.handleNextAfricaArrow.bind(this)}
            >
              &#10095;
            </div>
          </div>
        </section>
        <section className="section-experience">
          <div className="section-experience__heading">
            <div className="primaryHeading">
              Experience the trip of a lifetime
            </div>
          </div>
          <div className="section-experience__container">
            <div className="section-experience__container--form">
              <a
                className="section-experience__container--btn"
                href="http://eepurl.com/dH3L6b"
              >
                Tailor a trip to Kenya
              </a>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}
