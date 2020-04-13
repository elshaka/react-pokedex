import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home';
import Pokemon from './Pokemon';

const App = () => (
  <Router>
    <Navigation />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/pokemon/:id" component={Pokemon} />
    </Switch>
  </Router>
);

export default App;
