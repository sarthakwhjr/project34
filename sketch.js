const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20, ground;
var ball, rope

function preload() { 
  bg = loadImage("images/bg.png");
}
function setup() {
  createCanvas(1000, 500);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 400, 1200, 20);

  box1 = new Box(900, 100, 40, 40);
  box2 = new Box(900, 100, 40, 40);
  box3 = new Box(900, 100, 40, 40);
  box4 = new Box(900, 100, 40, 40);
  box5 = new Box(900, 100, 40, 40);
  box6 = new Box(900, 100, 40, 40);
  box7 = new Box(800, 100, 40, 40);
  box8 = new Box(800, 100, 40, 40);
  box9 = new Box(800, 100, 40, 40);
  box10 = new Box(800, 100, 40, 40);
  box11 = new Box(800, 100, 40, 40);
  box12 = new Box(800, 100, 40, 40);
  box13 = new Box(700, 100, 40, 40);
  box14 = new Box(700, 100, 40, 40);
  box15 = new Box(700, 100, 40, 40);
  box16 = new Box(700, 100, 40, 40);
  box17 = new Box(700, 100, 40, 40);
  box18 = new Box(700, 100, 40, 40);
  box19 = new Box(700, 100, 40, 40);
  box20 = new Box(700, 100, 40, 40);

  ball = new Ball(200, 200, 80, 80);
  rope = new Rope(ball.body, { x:500, y: 50 });

}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()
  box13.display()
  box14.display()
  box15.display()
  box16.display()
  box17.display()
  box18.display()
  box19.display()
  box20.display()
  

  ball.display();
  rope.display();



}


function mouseDragged() {
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
}

    
