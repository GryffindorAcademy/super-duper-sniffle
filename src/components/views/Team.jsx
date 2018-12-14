import React, { Component } from "react";
import Footer from "../Footer.jsx";
import TeamMember from "../TeamMember.jsx";
import ScrollToTop from "../ScrollToTop.jsx";
import { teamMatrix } from "../../teamInfo";

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
          {teamMatrix.map(row => (
            <div className="row">
              {row.map(col => (
                <TeamMember
                  image={col.image}
                  firstname={col.firstname}
                  fullname={col.fullname}
                  role={col.role}
                  bio={col.bio}
                />
              ))}
            </div>
          ))}
        </section>
        <Footer />
      </div>
    );
  }
}
