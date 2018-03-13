const delay = 500
let spaceImage
let spaceShipImage
let spaceSprite
let spaceShipSprite
let time

function preload() {
	spaceImage = loadImage('images/sky.png')
	spaceShipImage = loadImage('images/spaceship.gif')
}

function setup() {
    createCanvas(windowWidth, windowHeight)
	time = millis()
    loadSprites()
}

function draw() {
    background('#fff')
    spaceSprites.draw()
	spaceShipSprite.draw()
	if(delay + time < millis()) {
		spaceShipSprite.next()
		time = millis()
	}
}

const loadSprites = function() {
    spaceSprites = new SpaceSprites(spaceImage)
    spaceSprites.create()
	spaceShipSprite = new SpaceCraftSprite(spaceShipImage)
	spaceShipSprite.create()
}
