class Background {
    constructor (image) {
        this.image = image
        this.w = 300
        this.h = 300
        this.columns = width / this.w
        this.rows = height / this.h + 2
        this.sprites = []
    }

    create () {
        for (let i = 0; i < this.rows; i++) {
    		for (let j = 0; j < this.columns; j++) {
    			this.sprites.push(new Space(j * this.w, i * this.h, this.w, this.h))
    		}
    	}
    }

    draw () {
        let self = this
        this.sprites.forEach(function(sprite) {
            image(self.image, sprite.x, sprite.y, sprite.w, sprite.h)
            if(sprite.isOut(height))
                sprite.reset()
            else
                sprite.move()
        })
    }
}
