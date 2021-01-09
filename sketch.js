var string = "Meghana"
console.log(string)

var num = 100
console.log(num)

var bool = false
console.log(bool)

var object = null
console.log(object)

var arr1 =[1,2,3,4,5]
console.log(arr1)

var arr2 = ["Meghana",8,true]
console.log(arr2)

var arr3 = [[1,2],[4,5]]
console.log(arr3[0][1])

arr3.push(21)
arr3.pop()
console.log(arr3)



const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Constraint = Matter.Constraint

var engine,world;
var box1,box2,ground
var gameState="onsling"
var bg
function preload(){
  getBgImage();
}

function setup() {
  createCanvas(1200,400);

  engine=Engine.create();
  world=engine.world;

  box1=new Box(700,320,70,70);
  box2=new Box(920,320,70,70);
  ground=new Ground(width/2,height,width,40);
  platform=new Ground(150,300,300,170);
  console.log(box2.body.angle)
  pig1=new Pig(810,350);
  log1=new Log(810,260,300,PI/2)

  box3=new Box(700,240,70,70);
  box4=new Box(920,240,70,70);
  pig2=new Pig(810,220);
  log2=new Log(810,180,300,PI/2)

  box5=new Box(810,160,70,70);
  log3=new Log(760,120,150,PI/7)
  log4=new Log(870,120,150,-PI/7)

 // constrainedLog = new Log(100,200,100,PI/2)

  bird=new Bird(200,40);
  slingshot=new Slingshot(bird.body,{x:200,y:40})

  
}

function draw() {

  if(bg)
  background(bg);
  Engine.update(engine)

box1.display(); 
box2.display();
ground.display();
pig1.display();
log1.display();
box3.display(); 
box4.display();
pig2.display();
log2.display();
log3.display();
box5.display();
log4.display();
platform.display();
 bird.display();
console.log(bird.body.speed);
 //constrainedLog.display();
 slingshot.display();
 //getTime();
 }
 function mouseDragged(){
  // if(gameState!=="launched"){
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
   //}
   
  

 }
 function mouseReleased(){
   slingshot.fly()
   gameState ="launched"
 }
function keyPressed(){
  if(keyCode===32&&(bird.body.position.x>1200||bird.body.speed<1)){
    
    bird.trajectory=[]
    Matter.Body.setPosition(bird.body,{x:150,y:50})
    slingshot.attach(bird.body)
  }
}
 async function getBgImage(){

  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON =await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=06 && hour<=19){
      bg = "sprites/bg.png";
  }
  else{
      bg = "sprites/bg2.jpg";
  }

  backgroundImg = loadImage(bg);

  var response = await fetch("http://worldtimeapi.org/api/timezone/Australia/Sydney")
 // var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/kolkata")
  var responseJSON = await response .json()
  console.log(responseJSON.datetime)
  var datetime=responseJSON.datetime
  var hour=datetime.slice(11,13)
  console.log(hour)
  if(hour>=6&&hour<=18){
  bg=loadImage("sprites/bg.png")
    
  }
  else{
    bg=loadImage("sprites/bg2.jpg")
    
  }
  
}