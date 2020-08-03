export class Worker extends Phaser.Physics.Arcade.Sprite {
    /**
     * @param {Phaser.Scene} scene 
     * @param {number} x 
     * @param {number} y 
     * @param {string | number} frame 
     */
    constructor(scene, x, y, frame) {
        super(scene, x, y, "worker", frame)
        scene.sys.updateList.add(this)
        scene.sys.displayList.add(this)
        this.setOrigin(0, 0)
        scene.physics.world.enableBody(this)
        this.setImmovable(true)
    }
}