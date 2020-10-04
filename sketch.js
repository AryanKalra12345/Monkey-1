
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstaceImage
var FoodsGroup, obstacleGroup
var score
var survivalTime= 0;
var invisibleground;
var checkPoint,dieSound;
var game_over,gameover;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 checkPoint=loadSound("checkPoint.mp3");
  dieSound=loadSound("die.mp3");
  game_over=loadImage("gameOver.png");
}



function setup() {
  
 obstaclesGroup = createGroup();
  FoodsGroup=createGroup();
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
 
    
  gameover=createSprite(200,200,20,20);
 gameover.addImage(game_over);
  gameover.visible=false;
  
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);

  
}


function draw() {
  background("white");
  
  stroke("black");
  textSize(20);
  fill("white");
  text("score"+score,500,50);
  
  stroke("white");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survival Time:"+survivalTime,100,50);
  
  
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
   if(keyDown("space")&& monkey.y >= 141) {
        monkey.velocityY = -12;
     
   }
  
  monkey.velocityY=monkey.velocityY+0.5;
  
  monkey.collide(ground);
  
  if(obstaclesGroup.isTouching (monkey)){
      gameover.visible=true;
                    
   }  
  
  
  
  if(FoodsGroup.isTouching(monkey)){
      FoodsGroup.destroyEach();
     checkPoint.play();
   }  
  
  
  
  
  
  bananas();
spawnObstacles();
  drawSprites();
   }

function spawnObstacles(){
 if (frameCount % 100 === 0){
   var obstacle = createSprite(300,310,10,40);
   obstacle.scale=0.2;
   obstacle.addImage(obstaceImage);
   obstacle.velocityX = -6 ;
   obstacle.lifetime=-50;
   var rand = Math.round(random(1,2));
   obstaclesGroup.add(obstacle);
 }

  }
  
  function bananas(){
  if (frameCount % 80 === 0){
   var banana = createSprite(300,150,10,40);
   banana.scale=0.1;
   banana.addImage(bananaImage);
   banana.velocityX = -6 ;
   banana.lifetime=-100;
   var rand = Math.round(random(120,200));
   FoodsGroup.add(banana);
  
  
  
}
}
   
