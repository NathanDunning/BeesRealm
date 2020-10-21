import 'phaser';
import { CST } from '../../../CST';

export default class ScrollTwo extends Phaser.Scene {
  constructor() {
    super({ key: CST.SCENES.SCROLLTWO });
    this.parent = parent;
  }

  preload() {
    this.load.image('gatherer', '/assets/sprite/gatherer.png');
    this.load.image('scroll', '/assets/image/scroll.png');
    this.load.image('okay', '/assets/image/okay.png');
    this.load.image('back', '/assets/image/back.png');
  }

  create() {
    // Loading the scroll
    // find center
    let centerX = this.game.config.width / 2;
    let centerY = this.game.config.height / 2;

    // add scroll
    var scroll = this.add
      .image(centerX, centerY, 'scroll')
      .setDepth(2)
      .setScale(0.5);

    // add back button
    var button = this.add
      .image(centerX - 80, centerY + 240, 'back')
      .setDepth(3);
    button.setInteractive();
    button.on('pointerup', () => {
      this.scene.stop(CST.SCENES.SCROLLTWO);
      this.scene.launch(CST.SCENES.SCROLLONE);
    });

    // add next button
    var button = this.add
      .image(centerX + 80, centerY + 240, 'okay')
      .setDepth(3);
    button.setInteractive();
    button.on('pointerup', () => {
      this.scene.stop(CST.SCENES.SCROLLTWO);
      this.scene.launch(CST.SCENES.SCROLLTHREE);
    });

    var gatherer = this.add
      .image(centerX, centerY - 70, 'gatherer')
      .setDepth(3);

    // add text
    const sceneText =
      "There are 4 types of bees available in your colony. The first type of bee you unlock is the Gatherer. The Gatherer bee is identified by its yellow colour.\n\n\nIn order to collect pollen, you must command and guide your gatherer to a pollen tile.\n\nLet's start with that";

    var textConfig = {
      fontSize: '20px',
      color: '#000000',
      fontFamily: 'Arial',
    };

    this.add
      .text(
        scroll.getTopLeft().x + 60,
        scroll.getTopLeft().y + scroll.width / 10,
        sceneText,
        textConfig
      )
      .setDepth(3)
      .setWordWrapWidth(scroll.width / 2 - 110)
      .setOrigin(0)
      .setAlign('center');
  }

  update() {}
}
