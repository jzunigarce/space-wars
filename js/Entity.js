class Entity {
    constructor (image, x, y, w, h, crop=undefined) {
        this.sprite = new Sprite(image)
        this.x = x
        this.y = y
        this.w = w,
        this.h = h
        this.crop = crop
        this.dx = 0
        this.dy = 0
    }

    set speedX (dx) {
        this.dx = dx
    }

    set speedY (dy) {
        this.dy = dy
    }

    get speedX () {
        return this.dx
    }

    get speedY () {
        return this.dx
    }

    move () {
        this.x += this.dx
        this.y += this.dy
    }

    draw () {
        this.sprite.draw(this.x, this.y, this.w, this.h, this.crop)
    }

}
