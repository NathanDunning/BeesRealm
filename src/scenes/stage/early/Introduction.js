import 'phaser';
import { CST } from '../../../CST';
import { Worker } from '../../../models/Worker';
import _ from 'lodash';

export default class Introduction extends Phaser.Scene {
  worker;
  button;

  constructor() {
    super({ key: CST.SCENES.GAME });
  }

  preload() {
    // Map
    this.load.image('grass', './assets/image/grass.png');
    this.load.image('wall', './assets/image/wall.png');
    this.load.image('spawn', './assets/image/spawn.png');
    this.load.image('pollen', './assets/image/pollen.png');
    this.load.tilemapTiledJSON('map', './assets/maps/map.json');

    // Models
    this.load.spritesheet('gatherer', './assets/sprite/gatherer.png', {
      frameWidth: 32,
      frameHeight: 32,
    });
    this.load.spritesheet('worker', './assets/sprite/worker.png', {
      frameWidth: 32,
      frameHeight: 32,
    });
    this.load.spritesheet('fighter', './assets/sprite/fighter.png', {
      frameWidth: 32,
      frameHeight: 32,
    });
    this.load.spritesheet('queen', './assets/sprite/queen.png', {
      frameWidth: 32,
      frameHeight: 32,
    });

    this.anims.create({
      key: 'fly',
      frameRate: 4,
      repeat: -1,
      frames: this.anims.generateFrameNumbers('worker', {
        frames: [0, 1, 2, 3, 4],
      }),
    });
  }

  create() {
    //map
    let map = this.add.tilemap('map');
    let grassTile = map.addTilesetImage('grass');
    let wallTile = map.addTilesetImage('wall');
    let spawnTile = map.addTilesetImage('spawn');
    let pollenTile = map.addTilesetImage('pollen');

    //layers
    let grass = map.createStaticLayer('grass', [grassTile], 0, 0).setDepth(-1);
    let pollen = map
      .createStaticLayer('pollen', [pollenTile], 0, 0)
      .setDepth(-1);
    let wall = map.createStaticLayer('wall', [wallTile], 0, 0).setDepth(-1);
    let spawn = map.createStaticLayer('spawn', [spawnTile], 0, 0).setDepth(-1);

    spawn.layer.data.forEach((row, ridx) => {
      row.forEach((col, cidx) => {
        if (col.index !== -1) {
          global.spawnTile = {
            width: col.width,
            height: col.height,
            x: col.x,
            y: col.y,
            xPixel: col.pixelX,
            yPixel: col.pixelY,
          };
        }
      });
    });

    spawn.layer.data.forEach((row, ridx) => {
      row.forEach((col, cidx) => {
        if (col.index !== -1) {
          global.spawnTile = {
            width: col.width,
            height: col.height,
            x: col.x,
            y: col.y,
            xPixel: col.pixelX,
            yPixel: col.pixelY,
          };
        }
      });
    });

    global.pollenArr = [];

    pollen.layer.data.forEach((row) => {
      row.forEach((col, cidx) => {
        if (col.index !== -1) {
          global.pollenArr.push(col);
        }
      });
    });

    //add initial bee
    this.worker = new Worker(this);

    // bind button
    this.button = document.getElementById('submitOnce');

    //collisions
    this.physics.add.collider(this.worker, wall);
    wall.setCollisionByProperty({ collides: true });

    this.scene.launch(CST.SCENES.SCROLLONE);
    this.scene.pause(CST.SCENES.GAME);
  }

  async update(time, delta) {
    const self = this;

    const sleep = async (ms) => {
      return new Promise((resolve) => setTimeout(resolve, ms));
    };

    if (global.reset) {
      global.eventQueue.clear();
      this.worker.stop();
      this.worker.x = global.spawnTile.xPixel;
      this.worker.y = global.spawnTile.yPixel;
      global.reset = false;
    }

    try {
      if (global.consoleHandler.runClicked) {
        this.button.disabled = true;
        global.consoleHandler.runClicked = false;

        eval(global.consoleHandler.code);
        console.log(this.worker.x, this.worker.y);
        while (!global.eventQueue.isEmpty()) {
          const func = global.eventQueue.dequeue();
          await func();
          await sleep(512);
          global.pollenArr.forEach((tile) => {
            if (
              tile.pixelX === this.worker.x &&
              tile.pixelY === this.worker.y
            ) {
              this.scene.launch(CST.SCENES.COMPLETED);
              this.scene.pause(CST.SCENES.GAME);
            }
          });
          console.log(this.worker.x, this.worker.y);
        }

        this.button.disabled = false;
      }
    } catch (err) {
      console.error(err);
    }
  }
}
