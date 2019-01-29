import React, { Component } from "react";
import Header from "../Home/Header.jsx";
import Meaning from "../Home/Meaning.jsx";
import Action from "../Home/Action.jsx";
import Footer from "../Footer/Footer.jsx";
import ScrollToTop from "../ScrollToTop.jsx";

class Home extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <main>
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
      </main>
    );
  }
}

export default Home;
