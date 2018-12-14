import React, { Component } from "react";
import Header from "../Header.jsx";
import Meaning from "../Meaning.jsx";
import Action from "../Action.jsx";
import Footer from "../Footer.jsx";
import ScrollToTop from "../ScrollToTop.jsx";

class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  handleMenuBtn() {
    this.setState({});
  }

  handleTeam() {
    this.props.history.push("/Team");
  }

  render() {
    return (
      <div>
        <ScrollToTop />
        <Header history={this.props.history} />
        <main>
          <section className="section-meaning">
            <Meaning />
          </section>
          <section className="section-action">
            <Action history={this.props.history} />
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Home;
