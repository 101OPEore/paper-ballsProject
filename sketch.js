
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj;
var ball_options={
	restitution:0.60
}

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		desnity:1.2
	}
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  groundObj.draw();

  groundObj=new ground(width/4,880,width,30)
  leftSide = new ground(3400,600,30,130)

 
}



