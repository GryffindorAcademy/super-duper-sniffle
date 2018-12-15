import { lazy } from "react";

export const Home = lazy(() =>
  import(/* webpackChunkName: "Home" */ "./views/Home.jsx")
);

export const MeetTheStudents = lazy(() =>
  import(/* webpackChunkName: "MeetTheStudents" */ "./views/MeetTheStudents.jsx")
);

export const Team = lazy(() =>
  import(/* webpackChunkName: "Team" */ "./views/Team.jsx")
);

export const VisitAfrica = lazy(() =>
  import(/* webpackChunkName: "VisitAfrica" */ "./views/VisitAfrica.jsx")
);
