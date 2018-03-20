class BulletEntity extends Entity {
    constructor (image, x, y, w, h,crop) {
        super(image, x, y, w, h, crop)
    }

    static get UP () {
        return -1
    }

    static get DOWN () {
        return 1
    }

    draw () {
        push()
        translate(this.x, this.y)
        rotate(PI)
        image(this.sprite.image, -this.w / 2 - 10, -this.h , this.w, this.h, this.crop.x, this.crop.y, this.crop.w, this.crop.h)
        pop()
    }
}
