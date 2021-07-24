const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world,tower;

function setup(){
    var canvas = createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;
    tower=new Tower(81,342,160,400);

    
}

function draw(){
    background(0);
    Engine.update(engine);
    tower.display();
    
   
    console.log(mouseX, mouseY);
   
}
