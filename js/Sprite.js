class Sprite {
    constructor (image) {
        this.image = image
    }

    draw (x, y, w, h) {
        image(this.image, x, y, w, h)
    }
}
