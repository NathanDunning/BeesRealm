import React, { Component } from 'react';
import GameArea from './GameArea';
import Editor from './Editor';
import GameStats from './GameStats';
import { Container, Row, Col } from 'react-bootstrap';

class Play extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col sm md lg xl={10}>
              <GameArea />
            </Col>
            <Col sm md lg xl={2}>
              <GameStats />
            </Col>
          </Row>
          <Row>
            <Col>
              <Editor />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Play;
