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
      var oldY = self.y;
      oldY = oldY - 32;
      self.setVelocityY(-64);
      await self.sleep(500);
      self.stop();
      self.setY(oldY); // Ensure the pixel precise rounding
    });
  }
  moveNorthEast() {
    const self = this;
    global.eventQueue.enqueue(async function () {
      var oldY = self.y;
      var oldX = self.x;
      oldY = oldY - 32;
      oldX = oldX + 32;
      self.setVelocityY(-64);
      self.setVelocityX(64);
      await self.sleep(500);
      self.stop();
      self.setY(oldY);
      self.setX(oldX);
    });
  }
  moveEast() {
    const self = this;
    global.eventQueue.enqueue(async function () {
      var oldX = self.x;
      oldX = oldX + 32;
      self.setVelocityX(64);
      await self.sleep(500);
      self.stop();
      self.setX(oldX);
    });
  }
  moveSouthEast() {
    const self = this;
    global.eventQueue.enqueue(async function () {
      var oldY = self.y;
      var oldX = self.x;
      oldY = oldY + 32;
      oldX = oldX + 32;
      self.setVelocityY(64);
      self.setVelocityX(64);
      await self.sleep(500);
      self.stop();
      self.setY(oldY);
      self.setX(oldX);
    });
  }
  moveSouth() {
    const self = this;
    global.eventQueue.enqueue(async function () {
      var oldY = self.y;
      oldY = oldY + 32;
      self.setVelocityY(64);
      await self.sleep(500);
      self.stop();
      self.setY(oldY);
    });
  }
  moveSouthWest() {
    const self = this;
    global.eventQueue.enqueue(async function () {
      var oldY = self.y;
      var oldX = self.x;
      oldY = oldY + 32;
      oldX = oldX - 32;
      self.setVelocityY(64);
      self.setVelocityX(-64);
      await self.sleep(500);
      self.stop();
      self.setY(oldY);
      self.setX(oldX);
    });
  }
  moveWest() {
    const self = this;
    global.eventQueue.enqueue(async function () {
      var oldX = self.x;
      oldX = oldX - 32;
      self.setVelocityX(-64);
      await self.sleep(500);
      self.stop();
      self.setX(oldX);
    });
  }
  moveNorthWest() {
    const self = this;
    global.eventQueue.enqueue(async function () {
      var oldY = self.y;
      var oldX = self.x;
      oldY = oldY - 32;
      oldX = oldX - 32;
      self.setVelocityY(-64);
      self.setVelocityX(-64);
      await self.sleep(500);
      self.stop();
      self.setY(oldY);
      self.setX(oldX);
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
