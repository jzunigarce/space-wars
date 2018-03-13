class Space {
    constructor (x, y, w, h) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.speed = 2
    }

    isOut (height) {
        return this.y >= height
    }

    reset () {
        this.y = -this.h + this.speed
    }

    move () {
        this.y += this.speed
    }

}
