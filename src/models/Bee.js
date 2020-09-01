export class Bee extends Phaser.Physics.Arcade.Sprite {
    /**
     * @param {Phaser.Scene} scene 
     * @param {number} x 
     * @param {number} y 
     * @param {string | number} frame 
    */
    constructor(scene, texture) {
        super(scene, global.spawnTile.xPixel, global.spawnTile.yPixel, texture, null)
    }

    // Move Functions
    moveNorth() {
        // this.setVelocityY(-64)
        this.setPosition(this.x, this.y - 32)

    }
    moveNorthEast() {
        this.setVelocityY(-64)
        this.setVelocityX(64)
    }
    moveEast() {
        this.setVelocityX(64)
    }
    moveSouthEast() {
        this.setVelocityY(64)
        this.setVelocityX(64)
    }
    moveSouth() {
        this.setVelocityY(64)
    }
    moveSouthWest() {
        this.setVelocityY(64)
        this.setVelocityX(-64)
    }
    moveWest() {
        this.setVelocityX(-64)
    }
    moveNorthWest() {
        this.setVelocityY(-64)
        this.setVelocityX(-64)
    }
    stop() {
        this.setVelocityY(0)
        this.setVelocityX(0)
    }
}