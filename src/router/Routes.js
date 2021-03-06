import React from "react";
import { Route, Switch } from "react-router-dom";
import ApplicationPage from "../pages/ApplicationPage";
import CreateTripPage from "../pages/CreateTripPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import TripDetailPage from "../pages/TripDetailPage";
import TripListPage from "../pages/TripListPage";

function Routes() {
  return (
    <Switch>
      <Route path="/inscricao">
        <ApplicationPage />
      </Route>
      <Route exact path="/login">
        <LoginPage />
      </Route>
      <Route path="/viagens/detalhe/:tripId">
        <TripDetailPage />
      </Route>
      <Route path="/viagens/criar">
        <CreateTripPage />
      </Route>
      <Route path="/viagens">
        <TripListPage />
      </Route>
      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
  );
}

export default Routes;
