import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Col } from 'react-flexbox-grid';

import parties from './parties';
import VoteForParty from './components/vote-for-party';

class App extends Component {
  render() {
    return (
      <Grid>
        <Row middle="xs">
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

ReactDOM.render(<App/>, document.getElementById('content'));
