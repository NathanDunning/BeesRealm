import 'phaser'
import { CST } from '../../../CST'

export default class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: CST.SCENES.INTRODUCTION })
        this.parent = parent;
    }

    preload() {
        this.load.image("scroll", "/assets/image/scroll.png")
        this.load.image("okay", "/assets/image/okay.png")
    }

    create() {
        // Loading the scroll
        //
        // find center
        let centerX = this.game.config.width / 2
        let centerY = this.game.config.height / 2

        // add scroll
        var scroll = this.add.image(centerX, centerY, "scroll").setDepth(2).setScale(0.5)

        // add button
        //FIXME: Can button anchoring later
        var button = this.add.image(centerX, centerY + 240, "okay").setDepth(3)
        button.setInteractive()
        button.on("pointerup", () => {
            this.scene.resume(CST.SCENES.GAME)
            this.scene.stop(CST.SCENES.INTRODUCTION)
        })

        // add text
        const sceneText = 'Welcome to BeesRealm \n\nThe objective of this game is to manage your own colony of bees.\n\nThere are 4 categories of bees. Gatherer - objective is to collect pollen.\nWorker - objective is to build or destroy structures\nFighter - objective is to defend colony\nQueen - an overseer that can provide passive or active boosts.\n\nPollen can be identified by the red tiles on the map'

        var textConfig = {
            fontSize: '20px',
            color: '#000000',
            fontFamily: 'Arial',

        };
        console.log(scroll)
        this.add.text(
            scroll.getTopLeft().x + 60,
            scroll.getTopLeft().y + scroll.width / 10,
            sceneText,
            textConfig
        )
            .setDepth(3)
            .setWordWrapWidth(scroll.width / 2 - 110)
            .setOrigin(0)
            .setAlign("center")

    }

    update() { }
}