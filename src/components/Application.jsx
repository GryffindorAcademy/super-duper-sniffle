//////////////////////////////////////////////////////////////////////
// Top level of App, Routes controller from here, using Lazy Routes //
//////////////////////////////////////////////////////////////////////
import React, { Suspense, Component } from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "./NavigationBar.jsx";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCheckSquare,
  faSearch,
  faBars,
  faEnvelope,
  faPhoneSquare
} from "@fortawesome/free-solid-svg-icons";
import {
  Home,
  MeetTheStudents,
  Team,
  VisitAfrica,
  Donate
} from "./LazyRoutes.jsx";

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
              component={Donate}
              stripe={this.props.stripe}
            />
            <Route exact path="/Team" component={Team} />
            <Route exact path="/VisitAfrica" component={VisitAfrica} />
          </Suspense>
        </Switch>
      </main>
    );
  }
}

export default App;
