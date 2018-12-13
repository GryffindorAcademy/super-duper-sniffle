import React, { Suspense, Component, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import { StripeProvider } from "react-stripe-elements";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCheckSquare,
  faSearch,
  faBars,
  faYoutubeSquare,
  faEnvelope,
  faPhoneSquare
} from "@fortawesome/free-solid-svg-icons";
import SettingUpStripe from "./SettingUpStripe.jsx";
import SettingUpStripeMonthly from "./SettingUpStripeMonthly.jsx";

library.add(fab, faCheckSquare, faSearch, faBars, faEnvelope, faPhoneSquare);

export default class extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <main>
          <Switch>
            <Suspense fallback={<div>Loading...</div>}>
              <Route
                exact
                path="/"
                component={lazy(() =>
                  import(/* webpackChunkName: "Home" */ "./Home.jsx")
                )}
              />
              <Route
                exact
                path="/MeetTheStudents"
                component={lazy(() =>
                  import(/* webpackChunkName: "MeetTheStudents" */ "./MeetTheStudents.jsx")
                )}
              />
              {/* <Route exact path='/Donate' component={Donate} /> */}
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
              <Route
                exact
                path="/Team"
                component={lazy(() =>
                  import(/* webpackChunkName: "Team" */ "./Team.jsx")
                )}
              />
              <Route
                exact
                path="/Ann"
                component={lazy(() =>
                  import(/* webpackChunkName: "Ann" */ "./Ann.jsx")
                )}
              />
              <Route
                exact
                path="/Daniel"
                component={lazy(() =>
                  import(/* webpackChunkName: "Daniel" */ "./Daniel.jsx")
                )}
              />
              <Route
                exact
                path="/Kelvin"
                component={lazy(() =>
                  import(/* webpackChunkName: "Kelvin" */ "./Kelvin.jsx")
                )}
              />
              <Route
                exact
                path="/Mary"
                component={lazy(() =>
                  import(/* webpackChunkName: "Mary" */ "./Mary.jsx")
                )}
              />
              <Route
                exact
                path="/Onesmus"
                component={lazy(() =>
                  import(/* webpackChunkName: "Onesmus" */ "./Onesmus.jsx")
                )}
              />
              <Route
                exact
                path="/Samuel"
                component={lazy(() =>
                  import(/* webpackChunkName: "Samuel" */ "./Samuel.jsx")
                )}
              />
              <Route
                exact
                path="/Vivian"
                component={lazy(() =>
                  import(/* webpackChunkName: "Vivian" */ "./Vivian.jsx")
                )}
              />
              <Route
                exact
                path="/Winnie"
                component={lazy(() =>
                  import(/* webpackChunkName: "Winnie" */ "./Winnie.jsx")
                )}
              />
              <Route
                exact
                path="/Yvonne"
                component={lazy(() =>
                  import(/* webpackChunkName: "Yvonne" */ "./Yvonne.jsx")
                )}
              />
              <Route
                exact
                path="/VisitAfrica"
                component={lazy(() =>
                  import(/* webpackChunkName: "VisitAfrica" */ "./VisitAfrica.jsx")
                )}
              />
            </Suspense>
          </Switch>
        </main>
      </div>
    );
  }
}
