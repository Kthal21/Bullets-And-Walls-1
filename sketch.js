var wall,thickness;
var bullet,speed,weight;


function setup() {
  createCanvas(1600,400);
speed= random(223,321)
 weight=random(30,52)
  thickness=random(22,83);
  bullet=createSprite(50,200,50,25);
    bullet.velocityX=speed;
    bullet.shapeColor="white";
    wall=createSprite(1200, 200, thickness, height/2);
 wall.shapeColor=80,80,80;
}

function draw() {
  background("blue");  
  
  
  if(bullet.x-wall.x>wall.width/2+bullet.width/2){
 
       
  
    if(0.5*weight*speed*speed/thickness*thickness*thickness<10){
     
 
   bullet.shapeColor="green";
   
   
    }
    
      if(0.5*weight*speed*speed/thickness*thickness*thickness>10){
       bullet.shapeColor="red";
       
       
        }
   bullet.x=50;
   bullet.velocityX=0;
     }
  drawSprites();
}