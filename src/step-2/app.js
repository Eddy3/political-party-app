import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import VoteConservative from './components/VoteConservative';
import VoteLiberal from './components/VoteLiberal';

class App extends Component {
  render() {
    return (
      <div>
        <VoteConservative/>
        <VoteLiberal/>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('content'));
