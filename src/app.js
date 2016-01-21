import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import style from './style.scss';

class HelloWorld extends Component {
  render() {
    return (
      <div className={style.root}>Hello World!</div>
    );
  }
}

ReactDOM.render(<HelloWorld/>, document.getElementById('content'));
