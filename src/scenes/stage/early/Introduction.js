import 'phaser'
import { CST } from '../../../CST'

export default class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: CST.SCENES.INTRODUCTION })
        this.parent = parent;
    }

    preload() {
        this.load.image("scroll", "../../../../assets/image/scroll.png")
    }
    create() {
        console.log("loaded")
        var scroll = this.add.image(100, 100, "scroll").setOrigin(0).setDepth(10000)
    }

    update() { }
}