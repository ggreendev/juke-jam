import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Host from './Host';
import Home from './Home';
import Search from './Search';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

ReactDOM.render(
  <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/host" component={Host} />
        <Route path="/home" component={Home} />
        <Route path="/search" component={Search} />
      </div>
  </Router>,
  document.getElementById('root'));
