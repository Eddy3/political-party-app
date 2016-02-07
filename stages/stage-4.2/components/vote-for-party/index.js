import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

import style from './style';

export default class VoteForParty extends Component {
  static propTypes = {
    onVote: PropTypes.func.isRequired,
    party: PropTypes.shape({
      code: PropTypes.oneOf(['conservative', 'liberal', 'ndp', 'bloc', 'green']).isRequired,
      icon: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  };

  handleVote = () => {
    const { party: { code }, onVote } = this.props;

    onVote(code);
  };

  render() {
    const { party: { code, icon, name } } = this.props;

    return (
      <div className={style.root}>
        <h4>{name}</h4>
        <img className={style.icon} src={icon}/>
        <button
          className={classNames(style.button, style[`button--${code}`])}
          onClick={this.handleVote}
        >
          Vote
        </button>
      </div>
    );
  }
}
