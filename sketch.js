 var score,back_groundimage,back_ground,obstaclegroup,bananaimage,obstacleimage,player_running,ground,foodgroup;
var score 

function preload(){ 
player_running =loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");  

back_groundimage=loadImage("jungle.jpg");   
bananaimage=loadImage("banana.png");
obstacleimage=loadImage("stone.png");

}

function setup() {
createCanvas(800, 400);
back_ground=createSprite(0,0,800,400)
back_ground.addImage(back_groundimage)
back_ground.x=back_ground.width/2  
back_ground.velocityX=-4
ground=createSprite(400,350,800,10)
ground.velocityX=-4
player=createSprite(100,340,20,50)
player.addAnimation("running",player_running)
player.scale=0.2
 
 score=0   
  
obstaclegroup=new Group()
foodgroup=new Group()
  

}
function draw() {
ground.visible=false
if(ground.x<0){
  ground.x=ground.width/2
}
  if(back_ground.x<0){
  back_ground.x=back_ground.width/2
}
  
player.collide(ground)  
score=score+Math.round(getFrameRate()/60)  
  
  
if(keyDown("space")) {
  player.velocityY=-10
} 
  
player.velocityY=player.velocityY+0.8  
  
  
  spawnFood()
  spawnObstacles()
  
switch(score) {
  case 10:player.scale=0.12  
    break
    
  case 20:player.scale=0.14  
    break
    
  case 30:player.scale=0.16  
    break
    
  case 40:player.scale=0.18  
    break  
    default:break
}
    

stroke("white")
textSize(20)
fill("white")
score=score+Math.round(getFrameRate()/60)
text("Score:"+score, 500, 50);    
    
    
  
if(obstaclegroup.isTouching(player)){
player.scale=0.08
}  
 
    if(foodgroup.isTouching(player)){
foodgroup.destroyEach()
score=score+2
}  
    
drawSprites()
text("Score:"+score,500,50)
}
  
 function spawnFood() {
  //write code here to spawn the food
  if (frameCount % 80 === 0) {
    var banana = createSprite(600,250,40,10);
    banana.y = random(120,200);    
    banana.addImage(bananaimage);
    banana.scale = 0.05;
    banana.velocityX = -5;
     //assign lifetime to the variable
    banana.lifetime = 300;
    player.depth = banana.depth + 1;
    
    //add each banana to the group
    foodgroup.add(banana);
  }
}

function spawnObstacles() {
  if(frameCount % 300 === 0) {
    var obstacle = createSprite(800,350,10,40);
    obstacle.velocityX = -6;
    obstacle.addImage(obstacleimage);
    
    //assign scale and lifetime to the obstacle     
    obstacle.scale = 0.2;
    obstacle.lifetime = 300;
    
    //add each obstacle to the group
    obstaclegroup.add(obstacle);
  }
}

 
  