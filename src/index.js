import Phaser from 'phaser';

import CodeHandler from './utils/CodeHandler';
import EventQueue from './utils/EventQueue';

import Introduction from './scenes/stage/early/Introduction';
import ScrollOne from './scenes/stage/instructions/ScrollOne';
import ScrollTwo from './scenes/stage/instructions/ScrollTwo';

import 'babel-polyfill';

//IMPORT MENU SCENE
let game = new Phaser.Game({
  type: Phaser.AUTO,
  parent: 'phaser',
  width: 1600,
  height: 800,
  physics: {
    default: 'arcade',
    arcade: {
      debug: true,
    },
  },
  scene: [Introduction, ScrollOne, ScrollTwo],
  render: {
    pixelArt: true,
  },
});

// Code Handlers
global.consoleHandler = new CodeHandler();
// Event Queue
global.eventQueue = new EventQueue();

// Variables
var consoleButton = document.getElementById('consoleButton');
var console = document.getElementById('console');
var runOnce = document.getElementById('submitOnce');

function pageSetup() {
  function selectInputType(event) {
    if (event.target.id === 'consoleButton') {
      script.style.display = 'none';
      submit.style.display = 'none';
      console.style.display = 'initial';
      runOnce.style.display = 'initial';
    }
    // if (event.target.id === "scriptButton") {
    //   console.style.display = "none"
    //   runOnce.style.display = "none"
    //   script.style.display = "initial"
    //   submit.style.display = "initial"
    // }
  }

  // Page Setup
  function setPage() {
    var mainDiv = document.getElementById('rootPage');
    mainDiv.style.display = 'flex';

    var editor = document.getElementById('editor');
    editor.style.display = 'flex';
    editor.style.flexDirection = 'column';
    editor.style.width = '100%';
  }

  // Console Handler
  function setConsole() {
    // Tab Button
    consoleButton.onclick = (e) => selectInputType(e);

    // Text Pane
    console.style.flexGrow = '4';

    // Set on click
    runOnce.onclick = () => {
      global.consoleHandler.code = console.value;
      global.consoleHandler.runClicked = true;
    };
  }

  // Script Handler
  // function setScript() {
  //   // Script Button
  //   scriptButton.onclick = (e) => selectInputType(e)

  //   // Text Pane
  //   script.style.flexGrow = "4"
  //   script.style.display = "none"
  //   submit.style.display = "none"

  //   // Set on click
  //   submit.onclick = () => {
  //     script.value
  //     global.scriptHandler.code = script.value
  //   }
  // }

  setPage();
  setConsole();
  //setScript()
}

pageSetup();
