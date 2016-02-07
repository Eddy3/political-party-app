import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { VictoryChart, VictoryAxis, VictoryBar } from 'victory';

import parties from './parties';
import VoteForParty from './components/vote-for-party';

class App extends Component {
  render() {
    const totalVotes = 12312;
    const data = parties.map((party) => ({
      x: party.name,
      y: 1,
    }));

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
        <Row middle="xs">
          <Col md={6}>
            <h3>Total Votes: {totalVotes}</h3>
          </Col>
          <Col md={6}>
            <VictoryChart domainPadding={{ x: 20 }} width={500}>
              <VictoryAxis dependentAxis domain={[0, 5]} label="Votes"/>
              <VictoryBar
                animate={{ velocity: 0.01 }}
                data={data}
                style={{ data: { width: 15 } }}
              />
            </VictoryChart>
          </Col>
        </Row>
      </Grid>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('content'));
