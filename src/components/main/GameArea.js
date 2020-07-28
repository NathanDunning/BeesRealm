import React from "react";
import Phaser from "phaser";
import GameScene from '../../phaser/scenes/GameScene'
import { IonPhaser } from '@ion-phaser/react'

//IMPORT MENU SCENE
let config = new Phaser.Game({
  type: Phaser.AUTO,
  parent: "phaser",
  width: 1600,
  height: 800,
  scene: [
    GameScene
  ],
  render: {
    pixelArt: true
  }
})


export default GameArea = () => {
  return <IonPhaser game={config} />
}