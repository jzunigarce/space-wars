class ShipEntity extends Entity{
    constructor (image, x, y, w, h, crops) {
        super(image, x, y, w, h, crops[ShipEntity.FRONT])
        this.crops = crops
        this.side = ShipEntity.FRONT
    }

    static get FRONT () {
        return 1
    }

    static get LEFT () {
        return 0
    }

    static get RIGHT () {
        return 2
    }

    isOut () {
        return (this.x <= 0 && this.speedX < 0)|| (this.x + this.w >= width && this.speedX > 0)
    }

    move (dir) {
        this.speedX = dir === ShipEntity.LEFT ? -Math.abs(this.speedX) : Math.abs(this.speedX)
        if(this.isOut())
            return
        super.move()
    }

    moveDirection (dir) {
        this.crop = this.crops[dir]
    }

}
