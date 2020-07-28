import 'phaser'
import { CST } from "../CST"

export default class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: CST.SCENES.MENU })
    }

    preload() { }
    create() { }
}