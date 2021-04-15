import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ApplicationPage from '../pages/ApplicationPage';
import CreateTripPage from '../pages/CreateTripPage';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import Mission from '../pages/Mission';
import TripDetailPage from '../pages/TripDetailPage';
import TripListPage from '../pages/TripListPage';

function Routes() {
  return (
  <Switch>
    <Route path='/mission'>
    <Mission/>
    </Route>
    <Route exact path='/login'>
    <LoginPage/>
    </Route>
    <Route path='/viagens/detalhe'>
    <TripDetailPage/>
    </Route>
    <Route path='/viagens/criar'>
    <CreateTripPage/>
    </Route> 
    <Route path='/viagens'>
    <TripListPage/>
    </Route>
    <Route path='/inscricao'>
    <ApplicationPage/>
    </Route> 
    <Route path='/'>
    <HomePage/>
    </Route>
     
  
  </Switch>

    );
  }
  
  export default Routes;