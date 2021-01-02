
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
rectMode(CENTER)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper=new Paper(100,660,40,40)
ground=new Ground(800,680,1600,20)
dustbinb=new Dustbin(1200,570,200,20)
dustbinb1=new Dustbin(1100,590,200,200)
dustbinb2=new Dustbin(1300,590,200,100)



	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine)
  rectMode(CENTER);
  background(0);
  ground.display();
  paper.display();

 // dustbinb.display();
 dustbinb1.display();
  //dustbinb2.display();

  
  
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper.body,paper.body.position,{x:370,y:-370});
  
	}
}
