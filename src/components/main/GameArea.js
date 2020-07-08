import React, { Component } from 'react';
import { Stage, Sprite } from '@inlet/react-pixi';

class GameArea extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Stage>
        <Sprite image='../../assets/images/bee.png' />
      </Stage>
    );
  }
}

export default GameArea;
