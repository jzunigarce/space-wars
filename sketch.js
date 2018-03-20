let bg
let entities

function preload() {
	bg = loadImage('images/sky.png')
}

function setup() {
    createCanvas(windowWidth, windowHeight)
	entities = []
	initGame()
}

function draw() {
	background('#ffffff')
	entities.forEach((entity) => {
		entity.move()
	})

	entities.forEach((entity) => {
		entity.draw()
	})

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

const initGame = function () {
	createBg()
}
