import React, { Suspense, Component } from "react";
import { Route, Switch } from "react-router-dom";
import { StripeProvider } from "react-stripe-elements";
import Navigation from "./NavigationBar.jsx";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCheckSquare,
  faSearch,
  faBars,
  faEnvelope,
  faPhoneSquare
} from "@fortawesome/free-solid-svg-icons";
import SettingUpStripe from "./Stripe/SettingUpStripe.jsx";
import SettingUpStripeMonthly from "./Stripe/SettingUpStripeMonthly.jsx";
import {
  Home,
  MeetTheStudents,
  Team,
  VisitAfrica,
  StudentPage
} from "./LazyRoutes.jsx";
import studentAnswers from "../data/studentAnswers";

library.add(faCheckSquare, faSearch, faBars, faEnvelope, faPhoneSquare);

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <main>
        <Navigation />
        <Switch>
          <Suspense fallback={<div>Loading...</div>}>
            <Route exact path="/" component={Home} />
            <Route exact path="/MeetTheStudents" component={MeetTheStudents} />
            <Route
              exact
              path="/Donate"
              component={props => (
                <StripeProvider
                  stripe={this.props.stripe}
                  apiKey="pk_live_vszrvMhRROMcdoTW3BXBy3MQ"
                >
                  <SettingUpStripe {...props} />
                </StripeProvider>
              )}
            />
            <Route
              exact
              path="/MonthlyDonate"
              component={props => (
                <StripeProvider
                  stripe={this.props.stripe}
                  apiKey="pk_live_vszrvMhRROMcdoTW3BXBy3MQ"
                >
                  <SettingUpStripeMonthly {...props} />
                </StripeProvider>
              )}
            />
            <Route exact path="/Team" component={Team} />
            {/* {studentAnswers.map(student => (
              <Route
                exact
                path={`/${student.url}`}
                render={() => <StudentPage {...student} />}
              />
            ))} */}
            <Route exact path="/VisitAfrica" component={VisitAfrica} />
          </Suspense>
        </Switch>
      </main>
    );
  }
}

export default App;
