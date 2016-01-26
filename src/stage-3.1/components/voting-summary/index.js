/* eslint-disable id-length */

import React, {Component} from 'react';
import {Link} from 'react-router';
import {VictoryChart, VictoryAxis, VictoryBar} from 'victory';

import parties from '../../parties';

export default class VotingSummary extends Component {
  constructor(props) {
    super(props);

    const votes = {};

    parties.forEach((party) => votes[party.code] = 0);

    this.state = {votes};
  }

  render() {
    const {votes} = this.state;
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
