/* eslint-disable id-length, react/forbid-prop-types */

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {VictoryChart, VictoryAxis, VictoryBar} from 'victory';

import parties from '../../parties';

class VotingSummary extends Component {
  static propTypes = {
    votes: PropTypes.object.isRequired
  };

  render() {
    const {votes} = this.props;
    const data = parties.map((party) => ({
      x: party.name,
      y: votes[party.code],
      fill: party.color
    }));

    return (
      <div>
        <VictoryChart domainPadding={{x: 20}} width={500}>
          <VictoryAxis dependentAxis domain={[0, 5]} label='Votes'/>
          <VictoryBar
            animate={{velocity: 0.01}}
            data={data}
            style={{data: {width: 15}}}
          />
        </VictoryChart>
        <br/>
        <Link to='/vote'>View Voting</Link>
      </div>
    );
  }
}

export default connect((state) => ({votes: state.votes}))(VotingSummary);
