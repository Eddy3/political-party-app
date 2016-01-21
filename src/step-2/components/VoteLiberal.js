import React, {Component} from 'react';

import style from './VoteLiberal.scss';
import icon from './liberal-logo.svg';

export default class VoteLiberal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      votes: 0
    };
  }

  handleVote = () => {
    const {votes: previousVotes} = this.state;
    const votes = previousVotes + 1;

    this.setState({votes});
  };

  render() {
    const {votes} = this.state;

    return (
      <div className={style.root}>
        <h4>Liberal Party</h4>
        <img className={style.icon} src={icon}/>
        <button className={style.button} onClick={this.handleVote}>Vote - {votes}</button>
      </div>
    );
  }
}
