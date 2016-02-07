import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import VoteForConservative from './components/vote-for-conservative';
import VoteForLiberal from './components/vote-for-liberal';

class App extends Component {
  render() {
    return (
      <div>
        <VoteForConservative/>
        <VoteForLiberal/>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('content'));
