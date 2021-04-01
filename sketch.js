
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1,ground1;
var box1,box2,box3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

ground1=new Ground(400,670,800,25);
paper1=new Paper(100,665,20);
box1=new Dustbin(580,580,20,150);
box2=new Dustbin(680,655,200,20);
box3=new Dustbin(770,580,20,150);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground1.display();
  paper1.display();
 box1.display();
 box2.display();
 box3.display();
}

function keyPressed(){
	if(keyCode===UP_ARROW){
	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:65,y:-65})
}}

