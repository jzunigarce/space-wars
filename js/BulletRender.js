class BulletRender {
    constructor () {
        this.bullets = []
    }

    add (direction, x, y, type, speed=5) {
        this.bullets.push(new Bullet(x, y, type, speed, direction))
    }

    draw () {
        console.log(this.bullets.length)
        this.bullets.forEach(function(bullet) {
            stroke(bullet.type)
            line(bullet.x, bullet.y,bullet.x,bullet.y + (bullet.h * bullet.direction))
        })
    }

    move () {
        this.bullets.forEach(function(bullet, index, array) {
            bullet.move()
            if(bullet.isOut(height))
                array.splice(index, 1)
        })
    }

    collide () {

    }
}
