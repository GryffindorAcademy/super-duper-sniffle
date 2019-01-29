///////////////////////////////////////////////
// Team page, all team memebers display here //
///////////////////////////////////////////////
import React, { Component } from "react";
import Footer from "../Footer/Footer.jsx";
import TeamMember from "../Team/TeamMember.jsx";
import ScrollToTop from "../ScrollToTop.jsx";
import { teamMatrix } from "../../data/teamInfo";

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
  };

  render() {
    return (
      <main>
        <ScrollToTop />
        <header>
          <div className="team" />
          <div className="teamQuote">
            <h3 className="primaryHeading">
              We believe everyone deserves a chance to learn
            </h3>
          </div>
        </header>
        <section id="section-team">
          <div className="teamHeading">
            <h3 className="primaryHeading">Team</h3>
          </div>
          {teamMatrix.map(row => (
            <section className="row">
              {row.map(col => (
                <TeamMember
                  image={col.image}
                  firstname={col.firstname}
                  fullname={col.fullname}
                  role={col.role}
                  bio={col.bio}
                />
              ))}
            </section>
          ))}
        </section>
        <Footer />
      </main>
    );
  }
}
