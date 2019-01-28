import React, { Component } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";
import Amounts from "./Amounts.jsx";
import Terms from "./Terms.jsx";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      lastname: "",
      email: "",
      amount: "",
      amount: "",
      bgColor25: "none",
      bgColor50: "none",
      bgColor75: "none",
      bgColor100: "none",
      frequency: "monthly",
      inputs: [
        ["First name", "firstname"],
        ["Last name", "lastname"],
        ["Email", "email"]
      ]
    };
    this.handleState = this.handleState.bind(this);
    this.handleAmount = this.handleAmount.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
    this.toggleToMonthly = this.toggleToMonthly.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleState = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleAmount = e => {
    const { name, value } = e.target;
    this.setState({
      amount: parseInt(value) * 100,
      bgColor25: "#FFF",
      bgColor50: "#FFF",
      bgColor75: "#FFF",
      bgColor100: "#FFF"
    });
  };

  handleSelection = (key, value) => {
    let state = {
      amount: value,
      bgColor25: "#FFF",
      bgColor50: "#FFF",
      bgColor75: "#FFF",
      bgColor100: "#FFF"
    };
    state[key] = "#8F67BD";
    this.setState(state);
  };

  toggleToMonthly = async () => {
    let { frequency } = this.state;
    if (frequency === "monthly") {
      this.setState({ frequency: "one time" });
    } else {
      this.setState({ frequency: "monthly" });
    }
  };

  submit = async ev => {
    let { history } = this.props;
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
      <section className="donationForm">
        <label className="donationForm__formLabel">Personal Information</label>
        <form className="donationForm__information">
          {this.state.inputs.map(input => (
            <input
              key={input[1]}
              className="donationForm__information--input"
              placeholder={input[0]}
              name={input[1]}
              required
              onChange={this.handleState}
            />
          ))}
        </form>
        <label className="donationForm__formLabel">Payment Information</label>
        <section className="donationForm__donation">
          <div className="donationForm__amounts">
            <label className="amount__container--donationLabel">
              Select amount
            </label>
            <Amounts
              handleSelection={this.handleSelection}
              state={this.state}
            />
            <form className="amount">
              <label className="amount__container--donationLabel">Other</label>
              <div className="amount__container">
                <label className="amount__container--label">$</label>
                <input
                  className="amount__container--input"
                  onChange={this.handleAmount}
                />
                <label className="amount__container--label">USD</label>
              </div>
              <div className="question">
                <div className="switch">
                  <input type="checkbox" onClick={this.toggleToMonthly} />
                  <span className="slider round" />
                </div>
                <label className="question__container">Donate monthly</label>
              </div>
            </form>
          </div>
          <CardElement
            style={{
              base: { fontSize: "15px", fontFamily: "Ubuntu" }
            }}
          />
        </section>
        <Terms />
        <button className="donationForm__button" onClick={this.submit}>
          Donate
        </button>
      </section>
    );
  }
}

export default injectStripe(Form);
