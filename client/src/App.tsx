// App.js

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Account from './Account';
import Admin from './Admin';
import Home from './Home';
import Places from './Places';

class App extends Component {
  render() {
    return (
    <Router>
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/account' component={Account} />
              <Route path='/places' component={Places} />
              <Route path='/admin' component={Admin} />
          </Switch>
      </Router>
    );
  }
}

export default App;