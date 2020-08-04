var bullet, wall;
var speed, weight, thickness,damage;

function setup() {
  createCanvas(1600,400);
  thickness = random(22,83);
  speed = random(223,321);
weight = random(30,52);
  bullet = createSprite(50,200,50,10);
  wall = createSprite(1200,200,thickness,200);
  damage = (0.5*speed*speed*weight)/(thickness*thickness*thickness);

}

function draw() {
  background(0);  
  wall.shapeColor=color(80,80,80);
  bullet.shapeColor =color(255);
  fill("red");
  text("Speed -" + speed,200,200);
  fill("brown");
  text("Thickness of wall" + thickness,200,230);
  fill("pink");
  text("Weight -" + weight,200,260);
  fill("purple");
  text("Deformation = 0.5*speed*speed*weight/thickness*thickness*thickness",200,280);
  fill("white");
  text("Deformation -" + damage,200,300);
  bullet.velocityX = speed;
  if(bullet.isTouching(wall)){
    bullet.velocityX=0;
    if(damage>10){
      wall.shapeColor=color(255,0,0);
      fill("red");
      text("NOT RELIABLE",800,200);
    

    }

    if(damage<=10){
      wall.shapeColor=color(0,128,0);
      fill("green");
      text("RELIABLE!!!",800,200);
    
    }
    
  }
drawSprites();
}

