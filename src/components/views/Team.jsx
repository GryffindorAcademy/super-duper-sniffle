import React, { Component } from "react";
import Footer from "../Footer.jsx";
import TeamMember from "../TeamMember.jsx";
// import DrJohn from "../../images/drjohn.jpg";
// import Sam from "../../images/sam.jpg";
// import Vassiliki from "../../images/vassia.jpg";
// import Isabella from "../../images/isabellasPicture.jpg";
// import Jacob from "../../images/jacob.jpg";
// import Daniel from "../../images/DanielMbogoh.jpg";
import ScrollToTop from "../ScrollToTop.jsx";
import {
  DrJohn,
  Vassiliki,
  Jacob,
  Isabella,
  Sam,
  Daniel,
  Cole
} from "../../teamInfo";

export default class Team extends Component {
  constructor() {
    super();
    this.state = {
      popup: "close"
    };
  }

  handleBioPopup() {
    this.setState({
      popup: "open"
    });
  }

  handleCloseBioPopup = () => {
    this.setState({
      popup: "close"
    });
    console.log("hello");
  };

  render() {
    return (
      <div>
        <ScrollToTop />
        <header>
          <div className="team" />
          <div className="teamQuote">
            <div className="primaryHeading">
              We believe everyone deserves a chance to learn
            </div>
          </div>
        </header>
        <section id="section-team">
          <div className="teamHeading">
            <div className="primaryHeading">Team</div>
          </div>
          <div className="row">
            <TeamMember
              image={DrJohn.image}
              firstname={DrJohn.firstname}
              fullname={DrJohn.fullname}
              role={DrJohn.role}
              bio={DrJohn.bio}
            />
            <TeamMember
              image={Vassiliki.image}
              firstname={Vassiliki.firstname}
              fullname={Vassiliki.fullname}
              role={Vassiliki.role}
              bio={Vassiliki.bio}
            />
            <TeamMember
              image={Jacob.image}
              firstname={Jacob.firstname}
              fullname={Jacob.fullname}
              role={Jacob.role}
              bio={Jacob.bio}
            />
          </div>

          <div className="row">
            <TeamMember
              image={Isabella.image}
              firstname={Isabella.firstname}
              fullname={Isabella.fullname}
              role={Isabella.role}
              bio={Isabella.bio}
            />
            <TeamMember
              image={Sam.image}
              firstname={Sam.firstname}
              fullname={Sam.fullname}
              role={Sam.role}
              bio={Sam.bio}
            />
            <TeamMember
              image={Daniel.image}
              firstname={Daniel.firstname}
              fullname={Daniel.fullname}
              role={Daniel.role}
              bio={Daniel.bio}
            />
          </div>

          <div className="row">
            <TeamMember
              image={Cole.image}
              firstname={Cole.firstname}
              fullname={Cole.fullname}
              role={Cole.role}
              bio={Cole.bio}
            />
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}
