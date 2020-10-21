import 'phaser';
import { CST } from '../../../CST';

export default class ScrollThree extends Phaser.Scene {
  constructor() {
    super({ key: CST.SCENES.SCROLLTHREE });
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
      this.scene.stop(CST.SCENES.SCROLLTHREE);
      this.scene.launch(CST.SCENES.SCROLLTWO);
    });

    // add next button
    var button = this.add
      .image(centerX + 80, centerY + 240, 'okay')
      .setDepth(3);
    button.setInteractive();
    button.on('pointerup', () => {
      this.scene.resume(CST.SCENES.GAME);
      this.scene.stop(CST.SCENES.INTRODUCTION);
    });

    // add text
    const sceneText =
      'Here are the eight functions available to use:\n\n\nthis.worker.moveNorth()\nthis.worker.moveEast()\nthis.worker.moveSouth()\nthis.worker.moveWest()\n\nthis.worker.moveNorthEast()\nthis.worker.moveNorthWest()\nthis.worker.moveSouthEast()\nthis.worker.moveSouthWest()';

    var textConfig = {
      fontSize: '20px',
      color: '#000000',
      fontFamily: 'Arial',
    };

    this.add
      .text(
        scroll.getTopLeft().x + 80,
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
