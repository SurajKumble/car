const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var b1 , b2 , b3 , b4 , b5 , b6 , b7 ,  b8 , b9 , b10 , b11 , b12 , b13 , b14 , b15 , b16 , b17 , b18 , b19 , b20 ;
var ball1
var rope1



function setup(){
    var canvas = createCanvas(1600,800);
    engine = Engine.create();
    world = engine.world;

    ball1 = new Ball(200,200,80) ;
    rope1=new Rope (ball1.body,{x:500,y:50});


    b1 = new Box (900,100,70,70)
    b2 = new Box (900,100,70,70)
    b3 = new Box (900,100,70,70)
    b4 = new Box (900,100,70,70)
    b5 = new Box (900,100,70,70)
    b6 = new Box (900,100,70,70)
    b7 = new Box (800,100,70,70)
    b8 = new Box (800,100,70,70)
    b9 = new Box (800,100,70,70)
    b10 = new Box (800,100,70,70)
    b11 = new Box (800,100,70,70)
    b12 = new Box (800,100,70,70)
    b13 = new Box (700,100,70,70)
    b14 = new Box (700,100,70,70)
    b15 = new Box (700,100,70,70)
    b16 = new Box (700,100,70,70)
    b17 = new Box (700,100,70,70)
    b18 = new Box (700,100,70,70)
    b19 = new Box (700,100,70,70)
    b20 = new Box (700,100,70,70)
    ground = new Ground(600,600,1200,20);
    //platform = new Ground(150, 305, 300, 170);

    
    //log6 = new Log(230,180,80, PI/2);
    //slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(0);
    Engine.update(engine);
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
    b8.display();
    b9.display();
    b10.display();
    b11.display();
    b12.display();
    b13.display();
    b14.display();
    b15.display();
    b16.display();
    b17.display();
    b18.display();
    b19.display();
    b20.display();
    ball1.display();
    rope1.display();
    ground.display();
    //strokeWeight(4);

    
    //log6.display();
   // slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY})
}


