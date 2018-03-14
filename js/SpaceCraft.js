class SpaceCraft {

    static get UP () {
        return 1
    }

    static get DOWN () {
        return 2
    }

    static get LEFT () {
        return 3
    }

    static get RIGHT () {
        return 4
    }

    constructor (image,x, y, w, h, speed) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.speed = speed
        this.image = image
    }

    move (direction) {
        switch (direction) {
            case SpaceCraft.UP:
                this.y -= this.speed
                break;
            case SpaceCraft.RIGHT:
                this.x += this.speed
                break;
            case SpaceCraft.DOWN:
                this.y += this.speed
                break;
            case SpaceCraft.LEFT:
                this.x -= this.speed
                break;
        }
    }
}
