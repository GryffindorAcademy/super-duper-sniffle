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
import { Home, MeetTheStudents, Team, VisitAfrica } from "./LazyRoutes.jsx";

library.add(faCheckSquare, faSearch, faBars, faEnvelope, faPhoneSquare);

class App extends Component {
  constructor() {
    super();
    this.state = {
      donateRoutes: ["/MonthlyDonate", "/Donate"]
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
            {this.state.donateRoutes.map(route => (
              <Route
                exact
                key={route}
                path={route}
                component={props => (
                  <StripeProvider
                    stripe={this.props.stripe}
                    apiKey="pk_live_vszrvMhRROMcdoTW3BXBy3MQ"
                  >
                    <SettingUpStripe {...props} />
                  </StripeProvider>
                )}
              />
            ))}
            <Route exact path="/Team" component={Team} />
            <Route exact path="/VisitAfrica" component={VisitAfrica} />
          </Suspense>
        </Switch>
      </main>
    );
  }
}

export default App;
