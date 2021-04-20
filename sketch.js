const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingshot;
var polygon_img,polygon;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
  //level one
  block1 = new Block(280,275,30,40);
  console.log(block1);
  block2 = new Block(310,275,30,40);
  block3 = new Block(340,275,30,40);
  block4 = new Block(370,275,30,40);
  block5 = new Block(400,275,30,40);
  block6 = new Block(430,275,30,40);
  block7 = new Block(460,275,30,40);
  block8 = new Block(490,275,30,40);
  //level2 
  block9 = new Block(310,235,30,40);
  block10 = new Block(345,235,30,40);
  block11 = new Block(370,235,30,40);
  block12 = new Block(400,235,30,40);
  block13 = new Block(430,235,30,40);
  block14 = new Block(460,235,30,40);
  //level 3
  block15 = new Block(330,195,30,40);
  block16 = new Block(360,195,30,40);
  block17 = new Block(390,195,30,40);
  block18 = new Block(420,195,30,40);
  //level 4
  block19 = new Block(370,155,30,40);
  block20 = new Block(400,155,30,40);
  //top
  block21=new Block(400,135,30,40)
//set two
//level 1
blocks1=new Block(640,175,30,40);
blocks2=new Block(670,175,30,40);
blocks3=new Block(700,175,30,40);
blocks4=new Block(710,175,30,40);
blocks5=new Block(732,179,30,40);
//level 2
blocks6=new Block(670,135,30,40);
blocks7=new Block(700,135,30,40);
blocks8=new Block(730,135,30,40)
//level 3
blocks9=new Block(700,95,30,40);
//polygon
polygon=Bodies.circle(50,200,20);

polygon.scale=0.2;
World.add(world,polygon);

slingshot=new SlingShot(this.polygon,{x:170,y:170})
}
function draw() {
  background("white"); 
 Engine.update(engine);
 
  
  
  

  ground.display();
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  fill("pink");
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  fill("turquoise");
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  fill("green");
  block19.display();
  block20.display();
  fill(" yellow");
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  fill("teal")
  blocks6.display();
  blocks7.display();
  blocks8.display();
  fill("red")
  blocks9.display();
 fill(255,196,12)
 block21.display();

//imageMode(CENTRE)
//polygon=loadImage(polygon_img,ball.position.x-50,ball.position.y-80,40,40)
//ellipseMode(RADIUS)
ellipse(polygon.position.x,polygon.position.y,40);
slingshot.display();

}

function mouseDragged(){

  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  slingshot.fly();
}