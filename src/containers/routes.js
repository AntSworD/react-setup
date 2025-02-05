import React from 'react'
import { Router, Route } from 'react-router'

import App from './App/App'
import Home from './Home/Home'
import About from './About/About'

/**
 * The React Router routes for both the server and the client.
 */
module.exports = (
  <Router>
    <Route component={App}>
      <Route path="/" component={Home}/>
      <Route path="/home" component={Home}/>
      <Route path="/about" component={About}/>
    </Route>
  </Router>
)
