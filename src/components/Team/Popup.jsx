////////////////////////////////////////////////////////////////
// Popcup used on Team page for member information to display //
////////////////////////////////////////////////////////////////
import React, { Component } from "react";

export default class Popup extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { close } = this.props;
    return (
      <section className="popup">
        <div className="popup__content">
          <div onClick={close()}>X</div>
          <div className="popup__content--header" />
          <div className="popup__content--bio" />
        </div>
      </section>
    );
  }
}
