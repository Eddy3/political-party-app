import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Grid, Row, Col } from 'react-flexbox-grid';

import parties from '../../parties';
import * as votingActions from '../../actions';
import VoteForParty from '../vote-for-party';

class VotingPage extends Component {
  static propTypes = {
    onVote: PropTypes.func.isRequired,
    votes: PropTypes.object.isRequired,
  };

  render() {
    const { onVote, votes } = this.props;
    const totalVotes = Object.values(votes).reduce((prev, next) => prev + next);

    return (
      <Grid>
        <Row middle="xs">
          {
            parties.map((party) =>
              <Col key={party.code} md={4} sm={6} xs={12}>
                <VoteForParty onVote={onVote} party={party}/>
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

export default connect(
  (state) => ({ votes: state.votes }),
  {
    onVote: votingActions.vote,
  }
)(VotingPage);
