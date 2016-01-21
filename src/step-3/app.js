import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Grid, Row, Col} from 'react-flexbox-grid';

import parties from './parties';
import Vote from './components/vote';

class App extends Component {
  render() {
    return (
      <Grid>
        <Row middle='xs'>
          {
            parties.map((party) =>
              <Col md={3} sm={6} xs={12}>
                <Vote color={party.color} icon={party.icon} key={party.id} name={party.name}/>
              </Col>
            )
          }
        </Row>
      </Grid>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('content'));