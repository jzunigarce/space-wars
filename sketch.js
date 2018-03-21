let bg
let shipImg
let entities
let ship

function preload() {
	bg = loadImage('images/sky.png')
	shipImg = loadImage('images/spaceship.gif');
}

function setup() {
    createCanvas(windowWidth, windowHeight)
	entities = []
	initGame()
}

function draw() {
	background('#ffffff')
	entities.forEach((entity) => {
		if(entity instanceof ShipEntity)
			return
		entity.move()
	})

	entities.forEach((entity) => {
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

	for(let i = 0; i < rows; i++)
		for(let j = 0; j < columns; j++) {
			let bgEntity = new BackgroundEntity(bg, j * side, i * side, side, side)
			bgEntity.speedY = 2
			entities.push(bgEntity)
		}
}

const createShip = function () {
	let side = 80
	let x = width / 2 - side / 2
	let y = height - side
	let xC = 0
	let wC = 340
	let hC = 170
	let crop =  []
	crop.push({
		x: xC,
		y: 0,
		w: wC,
		h: hC,
	})
	crop.push({
		x: xC,
		y: 515,
		w: wC,
		h: hC,
	})
	crop.push({
		x: xC,
		y: 1025,
		w: wC,
		h: hC,
	})

	ship = new ShipEntity(shipImg, x, y, side, side, crop)
	ship.speedX = 5
	entities.push(ship)
}

const initGame = function () {
	createBg()
	createShip()
}
