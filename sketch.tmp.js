const skys = []
const spaceShip = []
let bg
let numberBgX
let numberBgY
let skyW = 300
let skyH = 300
let skyX = 0
let spaceShipImage
let shipW = 50
let iteratorShip
function preload() {
	bg = loadImage('images/sky.png')
	spaceShipImage = loadImage('images/spaceship.gif')
}

function setup() {
	createCanvas(windowWidth, windowHeight)
	numberBgX = Math.floor(width / skyW) + 2
	numberBgY = Math.floor(height / skyH) + 10
	for (let i = 0; i < numberBgY; i++) {
		for (let j = 0; j < numberBgX; j++) {
			skys.push({
				w: 300,
				h: 300,
				x: j * 300,
				y: i * 300
			})
		}
	}

	for(let i = 0; i < 7; i++) {
		spaceShip.push({
			y: i * 168 + 5
		})
	}
	iteratorShip = interatorSprite(spaceShip)
}

function draw() {
	let tx = skyX
	background('red')
	for (var i = 0; i < skys.length; i++) {
		image(bg, skys[i].x, skys[i].y, skys[i].w, skys[i].h)
		skys[i].y += 2
		if(skys[i].y >= height)
			skys[i].y = 0 - skys[i].h + 2
	}
	image(spaceShipImage, width / 2 - shipW / 2, height - 50, 50, 50, 0, iteratorShip.next().value.y, 340, 168)
}

const interatorSprite = function (array) {
	let nextIndex = 0
	let step = 1
	return {
		next() {
			if(nextIndex < 0) {
				step = -step
				nextIndex = 0
			} else if (nextIndex >= array.length){
				step = -step
				nextIndex = array.length - 1
			}
			return {value: array[nextIndex+=step], done: nextIndex}
		}
	}
}
