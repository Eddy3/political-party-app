import React, {Component, PropTypes} from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';

import VoteForParty from '../vote-for-party';

export default class VoteForParties extends Component {
  static propTypes = {
    parties: PropTypes.arrayOf(
      PropTypes.shape({
        code: PropTypes.oneOf(['conservative', 'liberal', 'ndp', 'bloc', 'green']).isRequired,
        icon: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
      }).isRequired
    ).isRequired
  };

  render() {
    const {parties} = this.props;

    return (
      <Grid>
        <Row middle='xs'>
          {
            parties.map((party) =>
              <Col key={party.code} md={4} sm={6} xs={12}>
                <VoteForParty party={party}/>
              </Col>
            )
          }
        </Row>
      </Grid>
    );
  }
}
