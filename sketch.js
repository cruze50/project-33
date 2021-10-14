const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var snowArr=[]
var bg 

function preload() {

  bg=loadImage("snow2.jpg")
  
}

function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
    world = engine.world;
  
}

function draw() {
  background(bg); 
  Engine.update(engine);
  
  if (frameCount%5===0){

    snowArr.push(new Snow(random(0,1200),-10,50))
  }

  for (var i=0;i<snowArr.length;i++){

    snowArr[i].display()

  }

  drawSprites();
}