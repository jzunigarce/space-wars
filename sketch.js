const delay = 500
let backgroundImage
let backgroundSpace
let playerImage
let player
let time

function preload () {
	backgroundImage = loadImage('images/sky.png')
	playerImage = loadImage('images/spaceship.gif')
}

function setup () {
    createCanvas(windowWidth, windowHeight)
	time = millis()
    load()
}

function draw () {
    background('#fff')
    backgroundSpace.draw()
	player.draw()
	player.drawBullets()

	if(keyIsDown(LEFT_ARROW))
		player.move(Sprite.LEFT)
	if(keyIsDown(RIGHT_ARROW))
		player.move(Sprite.RIGHT)

	player.moveBullets()
}

function keyPressed () {
	if(keyCode === 32)
		player.shooting()
}

function keyReleased () {
	player.moveDirection(Sprite.FRONT)
}

const load = function() {
    backgroundSpace = new Background(backgroundImage)
    backgroundSpace.create()
	player = new Player()
	player.create(playerImage)
}
