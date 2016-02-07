import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import parties from './parties';
import VoteForParty from './components/vote-for-party';

class App extends Component {
  render() {
    return (
      <div>
        {parties.map((party) => <VoteForParty party={party}/>)}
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('content'));
