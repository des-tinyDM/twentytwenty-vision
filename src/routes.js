import React from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "./pages/landing";
import PartyPage from "./pages/party";

export const Main = (
  <Switch>
    <Route exact path="/" render={() => <LandingPage />} />
    <Route path="/democrats" render={() => <PartyPage party="Democratic" />} />
    <Route
      path="/republicans"
      render={() => <PartyPage party="Republican" />}
    />
  </Switch>
);
