import React, { Suspense, Component } from "react";
import { Route, Switch } from "react-router-dom";
import { StripeProvider } from "react-stripe-elements";
import Navigation from "./NavigationBar.jsx";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCheckSquare,
  faSearch,
  faBars,
  faEnvelope,
  faPhoneSquare
} from "@fortawesome/free-solid-svg-icons";
import SettingUpStripe from "./SettingUpStripe.jsx";
import SettingUpStripeMonthly from "./SettingUpStripeMonthly.jsx";
import { Home, MeetTheStudents, Team, VisitAfrica } from "./LazyRoutes.jsx";
import StudentPage from "./StudentPage.jsx";
import studentAnswers from "../studentAnswers";

library.add(fab, faCheckSquare, faSearch, faBars, faEnvelope, faPhoneSquare);

class App extends Component {
  constructor() {
    super();
    this.state = {
      studentNames: [
        "Ann",
        "Daniel",
        "Kelvin",
        "Mary",
        "Onesmus",
        "Samuel",
        "Vivian",
        "Winnie",
        "Yvonne"
      ]
    };
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
            {this.state.studentNames.map((name, i) => (
              <Route
                exact
                path={`/${name}`}
                render={() => <StudentPage {...studentAnswers[i]} />}
              />
            ))}
            <Route exact path="/VisitAfrica" component={VisitAfrica} />
          </Suspense>
        </Switch>
      </main>
    );
  }
}

export default App;
