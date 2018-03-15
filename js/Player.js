class Player {

    constructor () {
        this.sprites = []
        this.bullets = new BulletRender()
        this.spriteDirection = Sprite.FRONT
    }

    create (image) {
        let side = 80
        let xCrop = 0
        let wCrop = 340
        let hCrop = 170
        this.spaceCraft = new SpaceCraft(image, width / 2 - side, height - side - 10, side, side, 5)

        this.sprites.push(new Sprite(xCrop, 5, wCrop, hCrop))
        this.sprites.push(new Sprite(xCrop, 515, wCrop, hCrop))
        this.sprites.push(new Sprite(xCrop, 1025, wCrop, hCrop))
    }

    draw () {
        try {
            image(this.spaceCraft.image, this.spaceCraft.x, this.spaceCraft.y,
                this.spaceCraft.w, this.spaceCraft.h,
                this.sprites[this.spriteDirection].x, this.sprites[this.spriteDirection].y,
                this.sprites[this.spriteDirection].w, this.sprites[this.spriteDirection].h)
        } catch (e) {
            console.log(e)
        }
    }

    drawBullets () {
        this.bullets.draw()
    }

    moveBullets () {
        this.bullets.move()
    }

    move (direction) {
        if(direction === Sprite.LEFT)
            this.spaceCraft.move(SpaceCraft.LEFT)
        else if(direction === Sprite.RIGHT)
            this.spaceCraft.move(SpaceCraft.RIGHT)
        this.moveDirection(direction)
    }

    moveDirection (direction) {
        this.spriteDirection = direction
    }

    shooting () {
        this.bullets.add(Bullet.UP, this.spaceCraft.x + this.spaceCraft.w / 2, this.spaceCraft.y, 'red')
    }
}
