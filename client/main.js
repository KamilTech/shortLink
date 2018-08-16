import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { Tracker } from 'meteor/tracker';

import Signup from './../imports/ui/Signup';
import Login from './../imports/ui/Login';
import Link from './../imports/ui/Link';
import NotFound from './../imports/ui/NotFound';

const browserHistory = createHistory();

const unauthenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/links'];

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

Tracker.autorun(() => {
    const isAuthenticated = !!Meteor.userId();
    const pathname = browserHistory.location.pathname;
    const IsUnauthenticatedPage = unauthenticatedPages.includes(pathname);
    const isAuthenticatedPage = authenticatedPages.includes(pathname);

    if (IsUnauthenticatedPage && isAuthenticated) {
        browserHistory.push('/links');
    } else if (isAuthenticatedPage && !isAuthenticated) {
        browserHistory.push('/');
    }
});

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'));
})
