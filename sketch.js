const delay = 500
let backgroundImage
let backgroundSpace
let spaceCraftImage
let spaceCraft
let time

function preload () {
	backgroundImage = loadImage('images/sky.png')
	spaceCraftImage = loadImage('images/spaceship.gif')
}

function setup () {
    createCanvas(windowWidth, windowHeight)
	time = millis()
    load()
}

function draw () {
    background('#fff')
    backgroundSpace.draw()
	spaceCraft.draw()

	if(keyIsDown(LEFT_ARROW))
		spaceCraft.move(SpaceCraftRender.LEFT)

	if(keyIsDown(RIGHT_ARROW))
		spaceCraft.move(SpaceCraftRender.RIGHT)
}

function keyPressed () {
	spaceCraft.shooting()
}

function keyReleased () {
	spaceCraft.moveDirection(SpaceCraftRender.FRONT)
}

const load = function() {
    backgroundSpace = new BackgroundRender(backgroundImage)
    backgroundSpace.create()
	spaceCraft = new SpaceCraftRender()
	spaceCraft.create(spaceCraftImage)
}
