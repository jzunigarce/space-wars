class Sprite {

    static get LEFT () {
        return 0
    }

    static get FRONT () {
        return 1
    }

    static get RIGHT () {
        return 2
    }
    
    constructor (x, y, w, h) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
    }
}
