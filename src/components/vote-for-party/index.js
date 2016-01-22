import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

import style from './style';

export default class Vote extends Component {
  static propTypes = {
    color: PropTypes.oneOf(['blue', 'red', 'orange', 'green']).isRequired,
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  };

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
    const {color, icon, name} = this.props;
    const {votes} = this.state;

    return (
      <div className={style.root}>
        <h4>{name}</h4>
        <img className={style.icon} src={icon}/>
        <button
          className={classNames(style.button, style[`button-${color}`])}
          onClick={this.handleVote}
        >
          Vote - {votes}
        </button>
      </div>
    );
  }
}
