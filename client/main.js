import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import Signup from './../imports/ui/Signup';
import Login from './../imports/ui/Login';
import Link from './../imports/ui/Link';
import NotFound from './../imports/ui/NotFound';

const browserHistory = createHistory();

const routes = (
 <Router history={browserHistory}>
     <Switch>
         <Route exact path="/" component={Login} />
         <Route path="/login" component={Login} />
         <Route path="/signup" component={Signup} />
         <Route path="/links" component={Link} />
         <Route path="*" component={NotFound} />
     </Switch>
 </Router>
 );

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'));
})
