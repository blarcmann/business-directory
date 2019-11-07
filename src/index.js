import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from './views/Login.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import Dashboard from './views/Dashboard.jsx';
import Businesses from './views/Businesses.jsx';

ReactDOM.render(
      <BrowserRouter>
        <Switch>
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/businesses" component={Businesses} />
          <Redirect from="/" to="/login"/>
        </Switch>
      </BrowserRouter>,
    document.getElementById("root")
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
