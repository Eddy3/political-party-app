import React, {Component} from 'react';

import style from './style';
import icon from './icon.svg';

export default class VoteForLiberal extends Component {
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
