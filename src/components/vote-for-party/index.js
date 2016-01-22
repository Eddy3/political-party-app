import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

import style from './style';

export default class Vote extends Component {
  static propTypes = {
    party: PropTypes.shape({
      code: PropTypes.oneOf(['conservative', 'liberal', 'ndp', 'bloc', 'green']).isRequired,
      icon: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
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
    const {party: {code, icon, name}} = this.props;
    const {votes} = this.state;

    return (
      <div className={style.root}>
        <h4>{name}</h4>
        <img className={style.icon} src={icon}/>
        <button
          className={classNames(style.button, style[`button--${code}`])}
          onClick={this.handleVote}
        >
          Vote - {votes}
        </button>
      </div>
    );
  }
}
