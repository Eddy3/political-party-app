import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import VoteConservative from './components/vote-conservative';
import VoteLiberal from './components/vote-liberal';

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
