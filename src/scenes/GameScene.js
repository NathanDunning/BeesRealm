import 'phaser'
import { CST } from "../CST"
import CodeHandler from './utils/CodeHandler'
import Introduction from './stage/early/Introduction'
import { Worker } from "./models/Worker";
import * as _ from 'lodash'

export default class GameScene extends Phaser.Scene {
    CodeHandler = new CodeHandler()
    spawnTile = {}
    workers = [];


    constructor() {
        super({ key: CST.SCENES.GAME })
    }

    preload() {
        // Map
        this.load.image("grass", "./assets/image/grass.png")
        this.load.image("wall", "./assets/image/wall.png")
        this.load.image("spawn", "./assets/image/spawn.png")
        this.load.image("pollen", "./assets/image/pollen.png")
        this.load.tilemapTiledJSON("map", "./assets/maps/map.json")

        // Models
        this.load.spritesheet("gatherer", "./assets/sprite/gatherer.png", {
            frameWidth: 32,
            frameHeight: 32
        })
        this.load.spritesheet("worker", "./assets/sprite/worker.png", {
            frameWidth: 32,
            frameHeight: 32
        })
        this.load.spritesheet("fighter", "./assets/sprite/fighter.png", {
            frameWidth: 32,
            frameHeight: 32
        })
        this.load.spritesheet("queen", "./assets/sprite/queen.png", {
            frameWidth: 32,
            frameHeight: 32
        })

        this.anims.create({
            key: "fly",
            frameRate: 4,
            repeat: -1,
            frames: this.anims.generateFrameNumbers("worker", {
                frames: [0, 1, 2, 3, 4]
            })
        })


    }

    create() {
        //map
        let map = this.add.tilemap("map")
        let grassTile = map.addTilesetImage("grass")
        let wallTile = map.addTilesetImage("wall")
        let spawnTile = map.addTilesetImage("spawn")
        let pollenTile = map.addTilesetImage("pollen")

        //layers
        let grass = map.createStaticLayer("grass", [grassTile], 0, 0).setDepth(-1);
        let pollen = map.createStaticLayer("pollen", [pollenTile], 0, 0).setDepth(-1);
        let wall = map.createStaticLayer("wall", [wallTile], 0, 0).setDepth(-1);
        let spawn = map.createStaticLayer("spawn", [spawnTile], 0, 0).setDepth(-1);

        spawn.layer.data.forEach((row, ridx) => {
            row.forEach((col, cidx) => {
                if (col.index !== -1) {
                    this.spawnTile = {
                        width: col.width,
                        height: col.height,
                        x: col.x,
                        y: col.y,
                        xPixel: col.pixelX,
                        yPixel: col.pixelY
                    }
                }
            })
        })

        //add initial bee
        let workerBee = new Worker(this, this.spawnTile.xPixel, this.spawnTile.yPixel, null)
        this.workers.push({
            id: _.uniqueId(),
            object: workerBee
        })

        //collisions
        //FIXME
        this.physics.add.collider(this.workers[0].object, wall)
        wall.setCollisionByProperty({ collides: true })

        // Set on click
        document.getElementById('submit').onclick = () => {
            let textArea = document.getElementById('code').value
            this.CodeHandler.code = textArea
        }

        this.keyboard = this.input.keyboard.addKeys("W, A, S, D")

        this.scene.launch(CST.SCENES.INTRODUCTION)
    }

    update(time, delta) {
        if (this.keyboard.W.isDown === true) {
            this.workers[0].object.setVelocityY(-64)
        }
        if (this.keyboard.S.isDown === true) {
            this.workers[0].object.setVelocityY(64)
        }
        if (this.keyboard.A.isDown === true) {
            this.workers[0].object.setVelocityX(-64)
        }
        if (this.keyboard.D.isDown === true) {
            this.workers[0].object.setVelocityX(64)
        }
        try {
            // Unsafe method
            eval(this.CodeHandler.code)


        } catch (err) {
            console.error(err)
        }
    }

}
