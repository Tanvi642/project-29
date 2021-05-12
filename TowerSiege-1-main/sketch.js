const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ball,img;


function preload(){
    img=loadImage("polygon.png");

}

function setup(){
    var canvas = createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(width/2,height,width,20);
    stand1=new Ground (390,300,250,10);
    block1= new Blocks (300,275);
    block2= new Blocks (330,275);
    block3= new Blocks (360,275);
    block4= new Blocks (390,275);
    block5= new Blocks (420,275);
    block6= new Blocks (450,275);
    block7= new Blocks (480,275);
    block8= new Blocks (330,235);
    block9= new Blocks (360,235);
    block10= new Blocks (390,235);
    block11= new Blocks (420,235);
    block12= new Blocks (450,235);
    ball=Bodies.circle (50,200,20);
    World.add (world,ball);
    slingshot=new SlingShot (ball,{x:100,y:200});

}

function draw () {
    background(56,44,44)
    ground.display();
    stand1.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    imageMode(CENTER);
    console.log(ball);
   image (img,ball.position.x,ball.position.y,40,40);
   slingshot.display();
  

}

function mouseDragged(){
    Matter.Body.setPosition(ball,{x:mouseX,y:mouseY}); 
}
  
function mouseReleased(){
    slingshot.fly();
}


