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

    // Move To Function
}