////////////////////////////////////////////////////////////////////////////////
// Amounts component rendered within Donate page, contains amounts to select, //
// seperated for readability                                                  //
////////////////////////////////////////////////////////////////////////////////
import React, { Component, Fragment } from "react";

class Amounts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: [
        { text: "$25", amount: 2500, key: "bgColor25" },
        { text: "$50", amount: 5000, key: "bgColor50" },
        { text: "$75", amount: 7500, key: "bgColor75" },
        { text: "$100", amount: 10000, key: "bgColor100" }
      ]
    };
  }
  render() {
    return (
      <Fragment>
        {this.state.info.map(button => (
          <div
            key={button.amount}
            className="donationForm__amounts--btn"
            onClick={() =>
              this.props.handleSelection(button.key, button.amount)
            }
            style={{
              backgroundColor: this.props.state[button.key],
              color:
                this.props.state[button.key] === "#8F67BD" ? "#FFF" : "#8F67BD"
            }}
          >
            {button.text}
          </div>
        ))}
      </Fragment>
    );
  }
}

export default Amounts;
