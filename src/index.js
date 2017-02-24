import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from './App';
import Home from './Home';
import About from './About';
import Snippets from './Snippets';

import 'tachyons';
import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
      <Route path="snippets" component={Snippets} />
    </Route>
  </Router>,
  document.getElementById('root')
);
