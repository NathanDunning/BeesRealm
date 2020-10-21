import 'phaser';
import { CST } from '../../../CST';

export default class Completed extends Phaser.Scene {
  constructor() {
    super({ key: CST.SCENES.COMPLETED });
    this.parent = parent;
  }

  preload() {
    this.load.image('scroll', '/assets/image/scroll.png');
    this.load.image('okay', '/assets/image/okay.png');
    this.load.image('back', '/assets/image/back.png');
  }

  create() {
    // Loading the scroll
    //
    // find center
    let centerX = this.game.config.width / 2;
    let centerY = this.game.config.height / 2;

    // add scroll
    var scroll = this.add
      .image(centerX, centerY, 'scroll')
      .setDepth(2)
      .setScale(0.5);

    // add next button
    var button = this.add
      .image(centerX + 80, centerY + 240, 'next')
      .setDepth(3);
    button.setInteractive();
    button.on('pointerup', () => {
      // Next stage
    });

    // add text
    const sceneText =
      "Congratulations, you completed the task:\n\n 'Collect One Pollen'";

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
