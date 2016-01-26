import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {Router, Route} from 'react-router';
import {createHistory} from 'history';

import votesReducer from './reducers';
import VotingPage from './components/voting-page';
import VotingSummary from './components/voting-summary';

const history = createHistory();
const store = createStore(
  combineReducers({
    votes: votesReducer
  })
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route component={VotingPage} path='/vote'/>
          <Route component={VotingSummary} path='/summary'/>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('content'));
