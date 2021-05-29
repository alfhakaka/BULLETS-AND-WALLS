var bullet,wall;
var speed,weight,thinkness;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(200, 200, 150, 10);
  wall = createSprite(1200,200,thinkness,height/2);

  bullet.velocityX = 15;

  speed=random(223,321);
  weight=random(30,52);
  thinkness=random(22.83);

}

function draw() {
  background("black");  
 
 
 if(wall.x-bullet.x < (bullet.width+wall.width)/2)
 {
  bullet.velocityX=0;
   var deformation=0.5 * weight * speed* speed/22509;
  if(deformation>100) 
  {
    bullet.shapeColor=color("yellow");
     wall.shapeColor=color("white");
  }
  if(deformation<100 && deformation>50)
  {
    bullet.shapeColor=color("green");
  wall.shapeColor=color("white");
  } 
  if (deformation<60) {
    bullet.shapeColor=color("red");
  wall.shapeColor=color("white");
  }
}
  drawSprites();
} 
function hasCollided(Lbullet, Lwall){
  bulletRightEdge=lbullet.x +lbullet.width;
  wallLeftWdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false;
  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5 * weight * speed * speed/(thinkness *thinkness *thinkness);
  }
  if(damage>10){
    wall.shapeColor=color(255,0,0);
  }
  if(damage<10)
  {
    wall.shapeColor=color(0,255,0);
  }
}