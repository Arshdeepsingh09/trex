var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png")
  cloudImage = loadImage("cloud.png")
  obstacle1 = loadImage("obstacle1.png")
  obstacle2 = loadImage("obstacle2.png")
  obstacle3 = loadImage("obstacle3.png")
  obstacle4 = loadImage("obstacle4.png")
  obstacle5 = loadImage("obstacle5.png")
  obstacle6 = loadImage("obstacle6.png")
  jumpsound = loadSound("jump.mp3")
  checkpoint = loadSound("checkPoint.mp3")
  die = loadSound("die.mp3")
  
}

function setup() {
  createCanvas(600, 200);
  
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
}

function draw() {
  background(0);
  
  if(keyDown("space")) {
    trex.velocityY = -10;
    jumpsound.play();
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
spawnclouds()
  spawnobstacles()
  trex.collide(invisibleGround);
  drawSprites();
}
function spawnclouds(){
  if (frameCount%100===0){
    var cloud = createSprite(600,120,40,10);
    cloud.velocityX = -6;
 cloud.addImage("cloud",cloudImage)   
    cloud.y = Math.round(random(80,120));
  }
}
function spawnobstacles(){
  if(frameCount%70===0){
  var obstacles = createSprite(600,165,10,40);
obstacles.velocityX = -6;
    var rand = Math.round(random(1,6));
    
    obstacles.scale = 0.5
    
    switch(rand){
      case 1: obstacles.addImage(obstacle1);
        break;
        case 2:obstacles.addImage(obstacle2);
        break;
        case 3:obstacles.addImage(obstacle3);
        break;
         case 4:obstacles.addImage(obstacle4);
        break;        
         case 5:obstacles.addImage(obstacle5);
        break;
         case 6:obstacles.addImage(obstacle6);
        break;        
    }
    
}
  
}
