var fixedR;
var moveR;

function setup() {
  createCanvas(800,400);
  fixedR=createSprite(400, 200, 50, 50);
  moveR=createSprite(400, 200, 50, 50);
  fixedR.shapeColor="blue"
  moveR.shapeColor="blue"
}

function draw() {
  background(0);  

  moveR.x=mouseX;
  moveR.y=mouseY;

  if (moveR.x-fixedR.x < fixedR.width/2 + moveR.width/2 && fixedR.x-moveR.x < fixedR.width/2 + moveR.width/2
    && moveR.y-fixedR.y < fixedR.height/2 + moveR.height/2 && fixedR.y-moveR.y < fixedR.height/2 + moveR.height/2){
    background("red")
  }else {
    background(0)
  }

  drawSprites();
}