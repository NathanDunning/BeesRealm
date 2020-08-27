import 'phaser'
import { CST } from '../../../CST'

export default class ScrollOne extends Phaser.Scene {
    constructor() {
        super({ key: CST.SCENES.SCROLLONE })
        this.parent = parent;
    }

    preload() {
        this.load.image("spawn", "./assets/image/spawn.png")
        this.load.image("pollen", "./assets/image/pollen.png")
        this.load.image("scroll", "/assets/image/scroll.png")
        this.load.image("okay", "/assets/image/okay.png")
        this.load.image("next", "/assets/image/next.png")
        this.load.image("back", "/assets/image/back.png")
    }

    create() {
        // Loading the scroll
        //
        // find center
        let centerX = this.game.config.width / 2
        let centerY = this.game.config.height / 2

        // add scroll
        var scroll = this.add.image(centerX, centerY, "scroll").setDepth(2).setScale(0.5)

        // add next button
        var button = this.add.image(centerX + 80, centerY + 240, "next").setDepth(3)
        button.setInteractive()
        button.on("pointerup", () => {
            this.scene.resume(CST.SCENES.GAME)
            this.scene.stop(CST.SCENES.SCROLLONE)
            this.scene.launch(CST.SCENES.SCROLLTWO)
        })

        var spawn = this.add.image(centerX, centerY - 20, "spawn").setDepth(3)
        var pollen = this.add.image(centerX, centerY + 110, "pollen").setDepth(3)

        // add text
        const sceneText = 'Welcome to BeesRealm \n\nBehind this scroll is the game map where bees will spawn.\n\nThe spawn point can be identified by the white tile below.\n\n\n\nPollen is the power source for bees and can be identified by the red tiles shown below.'

        var textConfig = {
            fontSize: '20px',
            color: '#000000',
            fontFamily: 'Arial',

        };

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