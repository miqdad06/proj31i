const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1;
var height;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  ground1 = new Ground(240,790,480,20);

    // TO CREATE THE PLINKO ROWS 
    for(var j= 40; j<=width; j=j+50)
    {
      plinkos.push(new Plinko(j,75,10));
    }
 
     for(var j = 15; j<=width-10; j=j+50)
    {
      plinkos.push(new Plinko(j,175,10));
    }
 
    for(var j= 40; j<=width; j=j+50)
    {
      plinkos.push(new Plinko(j,275,10));
    }
 
    for(var j=15; j<=width; j=j+50)
    {
      plinkos.push(new Plinko(j,375,10));
    }

      for(var i = 0; i <= width; i=i+80){
    
    divisions.push(new Division(i,height-divisionHeight/2,10,divisionHeight));
  
  }

}

function draw() {
  background(0); 
  Engine.update(engine);
  // TO CREATE THE DIVISIONS

  for (var k = 0; k < divisions.length; k++){

    divisions[k].display();

  }



   for(var j = 0; j < plinkos.length; j++)
   {
     plinkos[j].display();
   }

   // TO CREATE THE PARTICLES
   if(frameCount%60 ===0){
     particles.push(new Particle(random(width/2-10,width/2+10),10,10))
   }

   for(var p = 0; p < particles.length; p++)
   {
     particles[p].display();
   }

  ground1.display();

}