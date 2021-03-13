const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2;
var box3;
var box4;
var box5;

var pig1;
var pig2;

var log1;
var log2;
var log3;
var log4;
var bird1;

function setup(){
    var canvas = createCanvas(1200,900);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(800,850,80,80);
    box2 = new Box(1000,850,80,80);
    box3 = new Box(800,650,80,80);
    box4 = new Box(1000,650,80,80);
    box5 = new Box(900,500,80,80);
    ground = new Ground(600,height,1200,20);
    pig1 = new Pig(900,850,70,70);
    pig2 = new Pig(900,650,70,70);
    log1 = new Log(900,750,PI/2,300);
    log2 = new Log(900,550,PI/2,300);
    log3 = new Log(790,350,PI/4,150);
    log4 = new Log(990,350,PI/-4,150);
    bird1 = new Birds(200,800,70,70);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    bird1.display();
}