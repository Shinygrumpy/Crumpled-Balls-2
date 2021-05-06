const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;

//function preload()
//{

  //paperIMG = loadImage("sprites/paper.png");
 //dustbinIMG = loadImage("sprites/dustbingreen.png");

//}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper = new PaperClass(100,660,70)
  //paper.addImage(paperIMG)

	ground = new Ground(400,680,800,20)
	//dustbinLeft = new Dustbin(500,635,20,70)
  dustbinBottom = new Dustbin(720,700,170,150)
	//dustbinRight = new Dustbin(650,635,20,70)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  paper.display();
  ground.display();
  //dustbinLeft.display();
  dustbinBottom.display();
  //dustbinRight.display();


  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){

       Matter.Body.applyForce(paper.body, paper.body.position,{x:200, y:-500})

	}
}




