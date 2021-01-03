const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var a,b,c,d,e,ca,cb,cc,cd,ce, stationary;
function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
			width: 1200,
			height: 700,
			wireframes: false
		}
	});
	//Create the Bodies Here.
	stationary = new wall(400, 100, 800, 100);
	a = new circle(200, 400, 100);
	b = new circle(300, 400, 100);
	c = new circle(400, 400, 100);
	d = new circle(500, 400, 100);
	e = new circle(600, 400, 100);
	ca = new rope(a.body, stationary.body, -200, 0);
	cb = new rope(b.body, stationary.body, -100, 0);
	cc = new rope(c.body, stationary.body, 0, 0);
	cd = new rope(d.body, stationary.body, 100, 0);
	ce = new rope(e.body, stationary.body, 200, 0);
	Engine.run(engine);
	
}

function draw() {
	rectMode(CENTER);
	background(0);
	a.display();
	b.display();
	c.display();
	d.display();
	e.display();
	ca.display();
	cb.display();
	cc.display();
	cd.display();
	ce.display();
	stationary.display();
}



function keyPressed() {
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(a.body, a.body.position, { x: -600, y: -540 });

	}
}