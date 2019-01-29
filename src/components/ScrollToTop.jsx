//////////////////////////////////////////////////////////////////////////////
// When this is place on a pages DOM, the scroll will be set to top of page //
//////////////////////////////////////////////////////////////////////////////
import React, { Component } from "react";

export default class ScrollToTopOnMount extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return null;
  }
}
