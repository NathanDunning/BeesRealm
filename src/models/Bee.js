export class Bee extends Phaser.Physics.Arcade.Sprite {
  texture;
  /**
   * @param {Phaser.Scene} scene
   * @param {number} x
   * @param {number} y
   * @param {string | number} frame
   */
  constructor(scene, texture) {
    super(
      scene,
      global.spawnTile.xPixel,
      global.spawnTile.yPixel,
      texture,
      null
    );
    this.texture = texture;
  }

  // Move Functions
  moveNorth() {
    const self = this;
    global.eventQueue.enqueue(async function () {
      self.setVelocityY(-64);
      await self.sleep(500);
      self.stop();
    });
  }
  moveNorthEast() {
    const self = this;
    global.eventQueue.enqueue(async function () {
      self.setVelocityY(-64);
      self.setVelocityX(64);
      await self.sleep(500);
      self.stop();
    });
  }
  moveEast() {
    const self = this;
    global.eventQueue.enqueue(async function () {
      self.setVelocityX(64);
      await self.sleep(500);
      self.stop();
    });
  }
  moveSouthEast() {
    const self = this;
    global.eventQueue.enqueue(async function () {
      self.setVelocityY(64);
      self.setVelocityX(64);
      await self.sleep(500);
      self.stop();
    });
  }
  moveSouth() {
    const self = this;
    global.eventQueue.enqueue(async function () {
      self.setVelocityY(64);
      await self.sleep(500);
      self.stop();
    });
  }
  moveSouthWest() {
    const self = this;
    global.eventQueue.enqueue(async function () {
      self.setVelocityY(64);
      self.setVelocityX(-64);
      await self.sleep(500);
      self.stop();
    });
  }
  moveWest() {
    const self = this;
    global.eventQueue.enqueue(async function () {
      self.setVelocityX(-64);
      await self.sleep(500);
      self.stop();
    });
  }
  moveNorthWest() {
    const self = this;
    global.eventQueue.enqueue(async function () {
      self.setVelocityY(-64);
      self.setVelocityX(-64);
      await self.sleep(500);
      self.stop();
    });
  }

  async sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  stop() {
    this.setVelocityY(0);
    this.setVelocityX(0);
  }
}
