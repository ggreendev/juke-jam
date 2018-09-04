import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Host from './Host';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

ReactDOM.render(
  <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/host" component={Host} />
      </div>
  </Router>,
  document.getElementById('root'));
