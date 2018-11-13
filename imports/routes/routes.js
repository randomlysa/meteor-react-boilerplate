import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from '../utils/history'

import Login from '../ui/Login';
import Signup from '../ui/Signup';
import Dashboard from '../ui/Dashboard';
import NotFound from '../ui/NotFound';

const pagesForUnauthUsers = ['/', '/signup']
const pagesForAuthUsers = ['/dashboard']

export const onAuthChange = (isAuthenticated) => {
  let pathname = this.location.pathname;
  const isUnauthPage = pagesForUnauthUsers.includes(pathname)
  const isAuthPage = pagesForAuthUsers.includes(pathname)

  if(isAuthenticated && isUnauthPage) {
    history.replace('/dashboard');
  } else if(!isAuthenticated && isAuthPage) {
    history.replace('/');
  }
}

export const routes = (
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/signup/" component={Signup} />
        <Route path="/dashboard/" component={Dashboard} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
)
