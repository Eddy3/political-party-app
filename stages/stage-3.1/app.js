import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import { createHistory } from 'history';

import VotingPage from './components/voting-page';
import VotingSummary from './components/voting-summary';

const history = createHistory();

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Route component={VotingPage} path="/vote"/>
        <Route component={VotingSummary} path="/summary"/>
      </Router>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('content'));
