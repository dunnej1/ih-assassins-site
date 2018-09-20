import React from 'react';
import { render } from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import App from './components/App/App';
import NotFound from './components/App/NotFound';

import Home from './components/Home/Home';

import Leaderboard from './components/Leaderboard/Leaderboard';

import Killfeed from './components/Killfeed/Killfeed';
import Admintasks from './components/Admin/Admintasks';

import './styles/styles.css';

render((
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/Leaderboard" component={Leaderboard}/>
        <Route path="/killfeed" component={Killfeed}/>
        <Route path="/topsecretadminpage" component={Admintasks}/>
        <Route component={NotFound}/>
      </Switch>
    </App>
  </Router>
), document.getElementById('app'));
