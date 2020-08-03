import Phaser from "phaser";

import GameScene from './scenes/GameScene'
import Introduction from './scenes/stage/early/Introduction'

//IMPORT MENU SCENE
let game = new Phaser.Game({
  type: Phaser.AUTO,
  parent: "phaser",
  width: 1600,
  height: 800,
  physics: {
    default: 'arcade',
    arcade: {
      debug: true
    }
  },
  scene: [
    GameScene, Introduction
  ],
  render: {
    pixelArt: true
  }
})

var mainDiv = document.getElementById("rootPage")
mainDiv.style.display = "flex"

var editor = document.getElementById("editor")
editor.style.display = "flex"
editor.style.flexDirection = "column"
editor.style.width = "100%"

var code = document.getElementById("code")
code.style.flexGrow = "4"