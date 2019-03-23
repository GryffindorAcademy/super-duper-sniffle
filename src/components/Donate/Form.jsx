/////////////////////////////////////////////////////////////////////
// Form component rendered within Donate view, collects user input //
/////////////////////////////////////////////////////////////////////
import React, { Component } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";
import Amounts from "./Amounts.jsx";
import Terms from "./Terms.jsx";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      button: false,
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
        ["First name", "name"],
        ["Last name", "lastname"],
        ["Email", "email"]
      ]
    };
    this.buttonLogic = this.buttonLogic.bind(this);
    this.handleState = this.handleState.bind(this);
    this.handleAmount = this.handleAmount.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
    this.toggleToMonthly = this.toggleToMonthly.bind(this);
    this.submit = this.submit.bind(this);
  }

  buttonLogic = () => {
    this.setState({ button: !this.state.button });
  }

  handleState = e => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleAmount = e => {
    let { name, value } = e.target;
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

  toggleToMonthly = () => {
    let { frequency } = this.state;
    if (frequency === "monthly") {
      this.setState({ frequency: "one time" });
    } else {
      this.setState({ frequency: "monthly" });
    }
  };

  submit = async () => {
    let { history } = this.props;
    let response;
    let body; 

    if (this.state.amount < "500") {
      alert("The minimum amount is $5");
    } else {
      this.buttonLogic();
      try {
        let { token } = await this.props.stripe.createToken({
          name: this.state.name
        });
        if (token !== undefined) {
          body = {
            name: this.state.name,
            lastname: this.state.lastname,
            email: this.state.email,
            token: token.id,
            amount: this.state.amount
          };
        } else {
          this.buttonLogic();
          alert(
            "It seems there is an error with your personal information, please try again"
          );
        }
        ////////////////////////////////////////////////////////////////////////
        // Dynamically make request based on 'one time' or 'monthly' selected //
        ////////////////////////////////////////////////////////////////////////
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
        //////////////////////////////////////////////////////////////
        // If response returns as ok, continue to visit africa view //
        //////////////////////////////////////////////////////////////
        if (response.ok) {
          alert("Thank you for your donation!");
          history.push("/VisitAfrica");
        } else if (response.status === 409 || response.status === 402 || response.status === 500) {
          alert(
            "It seems there is an error with our server, please try again"
          );
        }
        this.buttonLogic();
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
                <label className="switch">
                  <input type="checkbox" onClick={this.toggleToMonthly} />
                  <span className="slider round" />
                </label>
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
        <button className="donationForm__button" onClick={this.submit} disabled={this.state.button}>
          {this.state.button ? 'Please wait...' : 'Donate'}
        </button>
      </section>
    );
  }
}

export default injectStripe(Form);
