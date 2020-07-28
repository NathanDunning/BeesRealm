import 'phaser'
import { CST } from "../../CST"

export default class GameScene extends Phaser.Scene {
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
    }

    create() {
        var self = this;
        function CreateMap() {
            //map
            let map = self.add.tilemap("map")
            let grassTile = map.addTilesetImage("grass")
            let wallTile = map.addTilesetImage("wall")
            let spawnTile = map.addTilesetImage("spawn")
            let pollenTile = map.addTilesetImage("pollen")

            //layers
            let grass = map.createStaticLayer("grass", [grassTile], 0, 0).setDepth(-1);
            let wall = map.createStaticLayer("wall", [wallTile], 0, 0).setDepth(-1);
            let pollen = map.createStaticLayer("pollen", [pollenTile], 0, 0).setDepth(-1);
            let spawn = map.createStaticLayer("spawn", [spawnTile], 0, 0).setDepth(-1);
        }

        CreateMap()
    }

    update() { }
}