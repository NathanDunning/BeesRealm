import { Bee } from "./Bee"

export class Fighter extends Bee {
    /**
     * @param {Phaser.Scene} scene 
     * @param {number} x 
     * @param {number} y 
     * @param {string | number} frame 
     */
    constructor(scene) {
        super(scene, "fighter")
        scene.sys.updateList.add(this)
        scene.sys.displayList.add(this)
        this.setOrigin(0, 0)
        scene.physics.world.enableBody(this)
        this.setImmovable(true)
    }
}