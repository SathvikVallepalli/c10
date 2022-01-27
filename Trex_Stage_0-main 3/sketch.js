var ground;
var ging;
var trex ,trex_running,edges;
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png")
ging = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex = createSprite(100,100,50,50);
 trex.addAnimation("running",trex_running)
 trex.scale=0.5

 edges = createEdgeSprites()
 ground = createSprite(300,170,600,10)
 ground.addImage(ging)
 ground.velocityX = -6
}

function draw(){
  background("lightblue")
  if (keyDown("space")){ 
    trex.velocityY=-6
  }
  trex.velocityY+=0.5
  trex.collide(ground)
  drawSprites()

}
