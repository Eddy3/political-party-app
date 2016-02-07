import React, { Component } from 'react';
import { Link } from 'react-router';
import { Grid, Row, Col } from 'react-flexbox-grid';

import parties from '../../parties';
import VoteForParty from '../vote-for-party';

export default class VotingPage extends Component {
  constructor(props) {
    super(props);

    const votes = {};

    parties.forEach((party) => votes[party.code] = 0);

    this.state = { votes };
  }

  handleVote = (partyCode) => {
    const { votes: currentVotes } = this.state;
    const votes = {
      ...currentVotes,
      [partyCode]: currentVotes[partyCode] + 1,
    };

    this.setState({ votes });
  };

  render() {
    const { votes } = this.state;
    const totalVotes = Object.values(votes).reduce((prev, next) => prev + next);

    return (
      <Grid>
        <Row middle="xs">
          {
            parties.map((party) =>
              <Col key={party.code} md={4} sm={6} xs={12}>
                <VoteForParty onVote={this.handleVote} party={party}/>
              </Col>
            )
          }
        </Row>
        <Row middle="xs">
          <Col sm={6} smOffset={6}>
            <h3>Total Votes: {totalVotes}</h3>
          </Col>
        </Row>
        <Row>
          <Col sm={6} smOffset={6}>
            <Link to="/summary">View Summary</Link>
          </Col>
        </Row>
      </Grid>
    );
  }
}
