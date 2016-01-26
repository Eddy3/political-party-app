import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import {Router, Route} from 'react-router';
import {createHistory} from 'history';
import {syncHistory, routeReducer} from 'react-router-redux';
import {createDevTools, persistState} from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';
import SliderMonitor from 'redux-slider-monitor';

import votesReducer from './reducers';
import VotingPage from './components/voting-page';
import VotingSummary from './components/voting-summary';

function getDebugSessionKey() {
  const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/);

  return (matches && matches.length > 0) ? matches[1] : null;
}

const DevTools = createDevTools(
  <DockMonitor changePositionKey='ctrl-q' toggleVisibilityKey='ctrl-h'>
    <LogMonitor theme='tomorrow'/>
  </DockMonitor>
);

/*
const DevTools = createDevTools(
  <DockMonitor
    changePositionKey='ctrl-q'
    defaultPosition='bottom'
    defaultSize={0.15}
    toggleVisibilityKey='ctrl-h'
  >
    <SliderMonitor keyboardEnabled/>
  </DockMonitor>
);
*/

const history = createHistory();
const reactRouterReduxMiddleware = syncHistory(history);
const finalCreateStore = compose(
  applyMiddleware(reactRouterReduxMiddleware),
  DevTools.instrument(),
  persistState(getDebugSessionKey())
)(createStore);
const store = finalCreateStore(
  combineReducers({
    routing: routeReducer,
    votes: votesReducer
  })
);

if (module.hot) {
  module.hot.accept('./reducers', () => {
    const newVotesReducer = require('./reducers').default;

    store.replaceReducer(combineReducers({
      routing: routeReducer,
      votes: newVotesReducer
    }));
  });
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <span>
          <Router history={history}>
            <Route component={VotingPage} path='/vote'/>
            <Route component={VotingSummary} path='/summary'/>
          </Router>
          <DevTools/>
        </span>
      </Provider>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('content'));
