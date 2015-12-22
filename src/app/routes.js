import React from 'react';
import { Route } from 'react-router';

import App from './App';
import Home from './Home/Home';
import About from './About/About';

const routes = (
  <Route component={ App }>
    <Route path="/" component={ Home }/>
    <Route path="/about" component={ About }/>
    // put other routes here...
  </Route>
);

export default routes;
