let bg
let shipImg
let entities
let ship
let sprite
let laser

function preload () {
	bg = loadImage('images/sky.png')
	shipImg = loadImage('images/spaceship.gif')
	sprite = loadImage('images/spaceshipsprites.gif')
	laser = loadSound('sounds/scifi002.mp3')
}

function setup () {
	createCanvas(windowWidth, windowHeight)
	entities = []
	initGame()
}

function draw () {
	background('#fff')
	entities.forEach ((entity) => {
		if(entity instanceof ShipEntity)
			return
		entity.move()
	})

	entities.forEach ((entity) => {
		entity.draw()
	})

	if(keyIsDown(LEFT_ARROW))
		ship.move(ShipEntity.LEFT)
	if(keyIsDown(RIGHT_ARROW))
		ship.move(ShipEntity.RIGHT)
}

const createBg = function () {
	let side = 300
	let columns = width / side
	let rows = height / side + 2

	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < columns; j++) {
			let bgEntity = new BackgroundEntity(bg, j * side, i * side, side, side)
			bgEntity.speedY = 2
			entities.push(bgEntity)
		}
	}

}

const createShip = function () {
	let side = 80
	let crop = []
	let xC = 0
	let wC = 340
	let hC = 170
	crop.push({x: xC, y: 5, w: wC, h: hC})
	crop.push({x: xC, y: 515, w: wC, h: hC})
	crop.push({x: xC, y: 1025, w: wC, h: hC})

	ship = new ShipEntity(shipImg, width / 2 - side / 2, height - side - 10, side, side, crop)
	ship.speedX = 5
	entities.push(ship)
}

const initGame = function () {
	createBg()
	createShip()
}

const shoothing = function (dir) {
	let w = 18
	let h = 36
	let x = ship.x + ship.w / 2 - w / 2
	let y = ship.y - ship.h / 2
	let crop = {
		x: 47,
		y: 202,
		w: 6,
		h: 13,
	}
	let shoot = new BulletEntity(sprite, x, y, w, h, crop)
	shoot.speedY = 4 * dir
	entities.push(shoot)
}

function keyPressed () {
	if(keyCode === LEFT_ARROW)
		ship.moveDirection(ShipEntity.LEFT)

	if(keyCode === RIGHT_ARROW)
		ship.moveDirection(ShipEntity.RIGHT)

	if(keyCode === 32) {
		shoothing(BulletEntity.UP)
		laser.play()
	}
}

function keyReleased () {
	ship.moveDirection(ShipEntity.FRONT)
}
