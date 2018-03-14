class Bullet {

    static get UP () {
        return -1
    }

    static get DOWN () {
        return 1
    }

    constructor (x, y, type, speed, direction) {
        this.x = x
        this.y = y
        this.h = 10
        this.type = type
        this.speed = speed
        this.direction = direction
    }

    isOut (height) {
        return this.y >= height || this.y + this.h <= 0
    }
}
