
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var canvas, canvasmouse
var engine
var world
var bob1, bob2, bob3, bob4, bob5
var string1, string2, string3, string4, string5


function setup() {

	var canvas = createCanvas(windowWidth/2, windowHeight/1.5);
	engine = Engine.create();
	world = engine.world;


	bob1 = new Pendulum(50, 250, red)
	bob2 = new Pendulum(150, 350, red)
	bob3 = new Pendulum(250, 450, red)
	bob4 = new Pendulum(350, 550, red)
	bob5 = new Pendulum(450, 650, red)



  
}


function draw() {

	Engine.run(engine);

	// let canvasmouse = Mouse.create(canvas.elt);
	// canvasmouse.pixelRatio = pixelDensity();
	// let options = {
	// 	mouse: canvasmouse
	// };
	// mouseConstraint = MouseConstraint.create(engine, options);
	// World.add(world, mouseConstraint)
}

function mouseDragged(){
	Matter.Body.setPosition(pendulum.body, {x: mouseX, y: mouseY});
}
