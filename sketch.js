
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5
var Roofs,Ropes


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	Roofs=new Roof(300,600,450,100);
	bobObject1= new Bob(100,400);
	bobObject2=new Bob(120,400);
	bobObject3=new Bob(140,400);
	bobObject4=new Bob(160,400);
	bobObject5=new Bob(180,400);

	Ropes=new Rope(bobObject1.body,bobObject2.body,bobObject3.body,bobObject4.body,bobObject5.body,Roofs.body);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  Roofs.display();
  Ropes.display();
 
}

function  keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bobObject1.body,25);
	}
}



