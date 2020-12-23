const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body= Matter.Body;
var engine;
var world; 
var ground;
var ball;

function setup() {
  createCanvas(800,400);

 engine=Engine.create();
 world=engine.world;
 var option={isStatic : true}
 var balloption={restitution : 1.0,isStatic : true }
 ground=Bodies.rectangle(400,380,700,50,option);
 World.add(world,ground);
ball=Bodies.circle(200,100,20,balloption);
World.add(world,ball);

 console.log(ground) ;
}

function draw() {
  background('black'); 

 Engine.update(engine);  
rectMode(CENTER);
 rect(ground.position.x,ground.position.y,700,50);

ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,20,20);

if(keyDown("space")){
 Body.setStatic(ball,false); 
}


}