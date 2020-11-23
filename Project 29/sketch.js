const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var a;
var Grounds,platform1,platform2,platform3;
var Hexagon,Slingshotse;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12
var circles=[];
function setup() {
  createCanvas(800,800);
  stroke(255)
  
 // camera=new Camera(width/2,height/2,0.5);
  //camera.on();
  a=height;
  circles.push(width/2)
  
  Grounds=new Ground(400,10,800,20);
  platform1=new Ground(150,190,100,20);
  platform2=new Ground(360,400,100,20);
  platform3=new Ground(50,140,100,20);

  //Tower For platform2
  box1=new Box(360,410,30,30);
  box2=new Box(375,410,30,30);
  box3=new Box(390,410,30,30);
  box4=new Box(365,420,30,30);
  box5=new Box(380,420,30,30);
  box6=new Box(372.5,430,30,30);

  //Tower For platform1
  box7=new Box(150,200,30,30);
  box8=new Box(175,200,30,30);
  box9=new Box(190,200,30,30);
  box10=new Box(165,220,30,30);
  box11=new Box(180,220,30,30);
  box12=new Box(172.5,230,30,30);

  //hexagon and rubber band
  Hexagon= new Bird(150,220);

  Slingshotse= new SlingShot(Hexagon.body,{x:200,y:300});

}

function draw() {
  //camera.zoom=camera.zoom+1
  background(0);  
  
  
  a=a-1;
  //camera.zoom=camera.zoom+0.01
 //camera.position={x:width/2,y:a}
 
  
  for (i=0;i<circles.length;i++)
{
	circle(circles[i], height/2,20)
}
if(camera.position.x%width===0)
{
	circles.push(camera.position.x+width/2)
}
 // camera(0, 0, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);
 drawSprites();
 Grounds.display();
 platform1.display();
 platform2.display();
 platform3.display();
 box1.display();
 box2.display();
 box3.display();
 box4.display();
 box5.display();
 box6.display();
 box7.display();
 box8.display();
 box9.display();
 box10.display();
 box11.display();
 box12.display();
 Hexagon.display();
}

function mouseDragged(){
  Matter.Body.setPosition(bird.body,{x:mouseX, y:mouseY});

}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed ()
{
  if(keyCode === RIGHT_ARROW)
  {
    if(keyIsDown(RIGHT_ARROW))
    {
      camera.position.x=camera.position.x+10;
    }
  }
} 