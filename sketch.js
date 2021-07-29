const Engine = Matter.Engine,
      World = Matter.World,
      Events = Matter.Events,
      Bodies = Matter.Bodies;

var engine, world;

var bg;
var snow = [];

function preload() {
bg = loadImage("snow3.jpg");
}

function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;
}

function draw() {
  background(bg);

  if(frameCount%17===0){
    snow.push(new Snow(random(10, 790), 50, 45, 45));
  }

  for (var j = 0; j < snow.length; j++) {  
    snow[j].display();
  }

  Engine.update(engine);

  drawSprites();
}