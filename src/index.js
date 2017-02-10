import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from './App';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';

import 'tachyons';
import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
      <Route path="portfolio" component={Portfolio} />
    </Route>
  </Router>,
  document.getElementById('root')
);
