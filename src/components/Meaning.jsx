import React, { Component, Fragment } from "react";

export default class Meaning extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Fragment>
        <header className="section-meaning__header">
          <h3 className="primaryHeading">Jijenge</h3>
          <h3 className="secondaryHeading">[ji-jehn-geh]</h3>
          <h3 className="secondaryHeading">verb</h3>
          <h3 className="secondaryHeading">
            1. build yourself, build your future
          </h3>
        </header>
        <section className="row">
          <section className="col-1-of-3">
            <div className="meaning-cards">
              <div className="meaning-cards__picture--1" />
              <div className="meaning-cards__content">
                <div className="meaning-cards__content--title">
                  Basic Education
                </div>
                <div className="meaning-cards__content--subtitle">
                  Local education partners deliver basic reading, writing and
                  math skills
                </div>
              </div>
            </div>
          </section>
          <section className="col-1-of-3">
            <div className="meaning-cards">
              <div className="meaning-cards__picture--2" />
              <div className="meaning-cards__content">
                <div className="meaning-cards__content--title">
                  Vocational Computer Training
                </div>
                <div className="meaning-cards__content--subtitle">
                  Jijenge trains students in remote work computer tasks like
                  image annotation, data entry, and ad-logging
                </div>
              </div>
            </div>
          </section>
          <section className="col-1-of-3">
            <div className="meaning-cards">
              <div className="meaning-cards__picture--3" />
              <div className="meaning-cards__content">
                <div className="meaning-cards__content--title">
                  Career Acceleration
                </div>
                <div className="meaning-cards__content--subtitle">
                  Jijenge works to place students in computer jobs with strong
                  upward mobility potential
                </div>
              </div>
            </div>
          </section>
        </section>
      </Fragment>
    );
  }
}
