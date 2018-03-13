class SpaceCraftSprite {
    constructor (image) {
        this.image = image
        this.sprites = []
        this.count = 0
        this.step = 1
    }

    create () {
        let w = 80
        let h = 80
        let x = width / 2 - w
        let y = height - h - 10
        let xCrop = 0
        let wCrop = 340
        let hCrop = 170
        for(let i = 0; i < 7; i++) {
            let yCrop = i * hCrop + 5
            this.sprites.push(new SpaceCraft(x, y, w, h, xCrop, yCrop, wCrop, hCrop))
        }
    }

    draw () {
        image(this.image, this.sprites[this.count].x, this.sprites[this.count].y,
                this.sprites[this.count].w, this.sprites[this.count].h,
                this.sprites[this.count].xCrop, this.sprites[this.count].yCrop,
                this.sprites[this.count].wCrop, this.sprites[this.count].hCrop)
    }

    next () {
        this.count += this.step
        if (this.count === 0 || this.count === this.sprites.length - 1) {
            this.step *= -1
        }
    }
}
