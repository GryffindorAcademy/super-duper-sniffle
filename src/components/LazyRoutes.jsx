/////////////////////////////////////////////////////////////////////////
// All used routes save Donate are code split (Donate requires Stripe) //
/////////////////////////////////////////////////////////////////////////
import { lazy } from "react";

export const Home = lazy(() =>
  import(/* webpackChunkName: "Home" */ "./views/Home.jsx")
);

export const Team = lazy(() =>
  import(/* webpackChunkName: "Team" */ "./views/Team.jsx")
);

export const VisitAfrica = lazy(() =>
  import(/* webpackChunkName: "VisitAfrica" */ "./views/VisitAfrica.jsx")
);

export const Donate = lazy(() =>
  import(/* webpackChunkName: "Donate" */ "./views/Donate.jsx")
);
