import React, { Component } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";
import Footer from "../Footer/Footer.jsx";
import donate1 from "../../images/donateMonthly1.jpg";
import donate2 from "../../images/donateMonthly2.jpg";
import ScrollToTop from "../ScrollToTop.jsx";

class Donate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      lastname: "",
      email: "",
      amount: "",
      frequency: "",
      amount: "",
      bgColor25: "none",
      bgColor50: "none",
      bgColor75: "none",
      bgColor100: "none",
      frequency: "monthly"
    };
  }

  handleState = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleAmount(e) {
    const { name, value } = e.target;
    this.setState({
      amount: parseInt(value) * 100,
      bgColor25: "#FFF",
      bgColor50: "#FFF",
      bgColor75: "#FFF",
      bgColor100: "#FFF"
    });
  }

  handleTwentyfive = () => {
    this.setState({
      amount: 2500,
      bgColor25: "#8F67BD",
      bgColor50: "#FFF",
      bgColor75: "#FFF",
      bgColor100: "#FFF"
    });
  };

  handleFifty = () => {
    this.setState({
      amount: 5000,
      bgColor50: "#8F67BD",
      bgColor25: "#FFF",
      bgColor75: "#FFF",
      bgColor100: "#FFF"
    });
  };

  handleSeventyfive = () => {
    this.setState({
      amount: 7500,
      bgColor75: "#8F67BD",
      bgColor25: "#FFF",
      bgColor50: "#FFF",
      bgColor100: "#FFF"
    });
  };

  handleHundred = () => {
    this.setState({
      amount: 10000,
      bgColor100: "#8F67BD",
      bgColor25: "#FFF",
      bgColor50: "#FFF",
      bgColor75: "#FFF"
    });
  };

  toggleToMonthly = async () => {
    const { frequency } = this.state;
    if (frequency === "monthly") {
      this.setState({ frequency: "one time" });
    } else {
      this.setState({ frequency: "monthly" });
    }
  };

  submit = async ev => {
    const { history } = this.props;
    let response;
    if (this.state.amount < "500") {
      alert("The minimum amount is $5");
    } else {
      try {
        let { token } = await this.props.stripe.createToken({
          name: this.state.name
        });
        let body = {
          name: this.state.name,
          lastname: this.state.lastname,
          email: this.state.email,
          token: token.id,
          amount: this.state.amount
        };
        if (this.state.frequency === "one time") {
          response = await fetch("/api/stripe/oneTimeDonation", {
            method: "POST",
            headers: { "Content-Type": "text/plain" },
            body: JSON.stringify(body)
          });
        } else {
          response = await fetch("/api/stripe/monthlyDonation", {
            method: "POST",
            headers: { "Content-Type": "text/plain" },
            body: JSON.stringify(body)
          });
        }
        if (response.ok) {
          alert("Thank you for your donation!");
          history.push("/VisitAfrica");
        } else if (response.status === 409) {
          alert(
            "It seems there is an error with your personal information, please try again"
          );
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  render() {
    return (
      <main>
        <ScrollToTop />
        <section id="section-donation">
          <div className="donateBackground">
            <header className="donateBackground__heading">
              <div className="donateHeaderContainer">
                <div className="primaryHeading">
                  Thank you for your donation
                </div>
                <div className="secondaryHeading">
                  100% of your money empowers students through education
                </div>
              </div>
            </header>
            <div className="row">
              <div className="col-1-of-2">
                <div className="donationForm">
                  <div className="donationForm__formLabel">
                    Personal Information
                  </div>
                  <div className="donationForm__information">
                    <form>
                      <input
                        className="donationForm__information--input"
                        placeholder="First name"
                        name="name"
                        required
                        onChange={this.handleState.bind(this)}
                      />
                      <input
                        className="donationForm__information--input"
                        placeholder="Last name"
                        name="lastname"
                        required
                        onChange={this.handleState.bind(this)}
                      />
                      <input
                        className="donationForm__information--input"
                        placeholder="Email"
                        name="email"
                        required
                        onChange={this.handleState.bind(this)}
                      />
                    </form>
                  </div>
                  <label className="donationForm__formLabel">
                    Payment Information
                  </label>
                  <section className="donationForm__donation">
                    <div className="donationForm__amounts">
                      <label className="amount__container--donationLabel">
                        Select amount
                      </label>
                      <div
                        className="donationForm__amounts--btn"
                        onClick={this.handleTwentyfive.bind(this)}
                        style={{
                          backgroundColor: this.state.bgColor25,
                          color:
                            this.state.bgColor25 === "#8F67BD"
                              ? "#FFF"
                              : "#8F67BD"
                        }}
                      >
                        $25
                      </div>
                      <div
                        className="donationForm__amounts--btn"
                        onClick={this.handleFifty.bind(this)}
                        style={{
                          backgroundColor: this.state.bgColor50,
                          color:
                            this.state.bgColor50 === "#8F67BD"
                              ? "#FFF"
                              : "#8F67BD"
                        }}
                      >
                        $50
                      </div>
                      <div
                        className="donationForm__amounts--btn"
                        onClick={this.handleSeventyfive.bind(this)}
                        style={{
                          backgroundColor: this.state.bgColor75,
                          color:
                            this.state.bgColor75 === "#8F67BD"
                              ? "#FFF"
                              : "#8F67BD"
                        }}
                      >
                        $75
                      </div>
                      <div
                        className="donationForm__amounts--btn"
                        onClick={this.handleHundred.bind(this)}
                        style={{
                          backgroundColor: this.state.bgColor100,
                          color:
                            this.state.bgColor100 === "#8F67BD"
                              ? "#FFF"
                              : "#8F67BD"
                        }}
                      >
                        $100
                      </div>
                      <div className="amount">
                        <form>
                          <label className="amount__container--donationLabel">
                            Other
                          </label>
                          <div className="amount__container">
                            <label className="amount__container--label">
                              $
                            </label>
                            <input
                              className="amount__container--input"
                              onChange={this.handleAmount.bind(this)}
                            />
                            <label className="amount__container--label">
                              USD
                            </label>
                          </div>
                          <div className="question">
                            <label className="switch">
                              <input
                                type="checkbox"
                                onClick={this.toggleToMonthly}
                              />
                              <span className="slider round" />
                            </label>
                            <label className="question__container">
                              Donate monthly
                            </label>
                          </div>
                        </form>
                      </div>
                    </div>
                    <CardElement
                      style={{
                        base: { fontSize: "15px", fontFamily: "Ubuntu" }
                      }}
                    />
                  </section>
                  <label className="donationForm__formLabel">
                    By clicking, you agree to <a href="#terms">our terms</a> and
                    conditions.
                  </label>
                  <section id="terms" className="termsandconditions">
                    <div className="termsandconditions__content">
                      <div className="termsandconditions__right">
                        <a
                          href="#section-donation"
                          className="termsandconditions__close"
                        >
                          &times;
                        </a>
                      </div>
                      <div className="termsandconditions__left">
                        “Jijenge Academy is a Delaware nonprofit corporation.
                        Its application for federal recognition of section
                        501(c)(3) charitable status is in process.”
                      </div>
                    </div>
                  </section>
                  <div
                    className="donationForm__button"
                    onClick={this.submit.bind(this)}
                  >
                    Donate
                  </div>
                </div>
              </div>
              <div className="col-1-of-2">
                <div className="composition">
                  <img
                    className="composition__photo composition__photo--p1"
                    src={donate1}
                  />
                  <img
                    className="composition__photo composition__photo--p2"
                    src={donate2}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    );
  }
}

export default injectStripe(Donate);
