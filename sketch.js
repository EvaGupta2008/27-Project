
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var bob1, bob2, bob3, bob4, bob5;
var roof;


function setup() {
	createCanvas(800, 700);
    
	engine= Engine.create();
	world = engine.world

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(350,300,700,30);

    bob1 = new Bob(400,350,50,50);
	bob2 = new Bob(450,350,50,50);
	bob3 = new Bob(500,350,50,50);
	bob4 = new Bob(550,350,50,50);
	bob5 = new Bob(600,350,50,50);

	Engine.run(engine);
  
}


function draw() {
  
  background("black");
  Engine.update(engine);
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
 
}



