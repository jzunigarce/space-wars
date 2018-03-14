class BulletRender {
    constructor () {
        this.bullets = []
    }

    add (direction, x, y, type, speed=5) {
        this.bullets.push(new Bullet(x, y, type, speed, direction))
    }

    draw () {
        this.bullets.forEach(function(bullet) {
            stroke(bullet.type)
            line(bullet.x, bullet.y,bullet.x,bullet.y + (bullet.h * bullet.direction))
        })
    }

    move () {
        let i = 0
        while(i < this.bullets.length) {
            this.bullets[i].y += (this.bullets[i].speed * this.bullets[i].direction)

            if(this.bullets[i].isOut(height))
                this.bullets.splice(i, 1)
            else
                i++
        }
    }
}
