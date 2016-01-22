import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import parties from './parties';
import VoteForParties from './components/vote-for-parties';

class App extends Component {
  render() {
    return <VoteForParties parties={parties}/>;
  }
}

ReactDOM.render(<App/>, document.getElementById('content'));
