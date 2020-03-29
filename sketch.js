const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var wall1,wall2,wall3,wall4;
var ground;
function setup(){

 var canvas = createCanvas(800,400);
 engine = Engine.create();
 world = engine.world; 

 wall1 = new Wall(400,350,400,200);
 wall2 = new Wall(200,350,100,400);
 wall3 = new Wall(600,350,100,400);
 wall4 = new Wall(400,237,190,25);
 
 wall5 = new Wall(310,210,40,30);
 wall6 = new Wall(490,210,40,30);
 wall7 = new Wall(358,210,30,30);
 wall8 = new Wall(400,210,30,30);
 wall9 = new Wall(442,210,30,30);

 wall10= new Wall(400,200,100,250)
 wall11= new Wall(400,80,130,25);


 wall12= new Wall(358,55,25,25);
 wall13= new Wall(400,55,25,25);
 wall14= new Wall(442,55,25,25);

 wall15= new Wall(200,135,130,30);
 wall16= new Wall(135,105,40,30);
 wall17= new Wall(265,105,40,30);
 wall18= new Wall(200,105,40,30);

 wall19= new Wall(600,135,130,30);
 wall20= new Wall(535,105,40,30);
 wall21= new Wall(665,105,40,30);
 wall22= new Wall(600,105,40,30);

 

 ground = new Ground(400,390,800,30);
}

function draw(){
 background(0);
 Engine.update(engine);

 wall10.display();

 wall1.display();
 wall2.display();
 wall3.display();
 wall4.display();

 wall5.display();
 wall6.display();
 wall7.display();
 wall8.display();
 wall9.display();

 wall11.display();

 wall12.display();
 wall13.display();
 wall14.display();

 wall15.display();
 wall16.display();
 wall17.display();
 wall18.display();

 wall19.display();
 wall20.display();
 wall21.display();
 wall22.display();

 fill(0,150,210);
 ellipse(200,235,50,50);
 ellipse(600,235,50,50);
 ellipse(400,140,50,50);

 ground.display();
}




