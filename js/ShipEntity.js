class ShipEntity extends Entity{
    constructor (image, x, y, w, h, crops) {
        super(image, x, y, w, h, crops[ShipEntity.FRONT])
    }

    static get LEFT () {
        return 0
    }

    static get FRONT () {
        return 1
    }

    static get RIGHT () {
        return 2
    }

    move (dir) {
        this.speedX = (dir === ShipEntity.LEFT) ? -Math.abs(this.speedX) : Math.abs(this.speedX)
        super.move()
    }
}
