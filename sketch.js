var garden,rabbit;
var gardenImg,rabbitImg;
var Apple,apple_img;
var orange,orangeImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  apple_img=loadImage("apple.png");
  orangeImg=loadImage("orangeLeaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
rabbit.x=World.mouseX;

var ran=Math.round(random(1,2))

if (frameCount%80===0){
  if(ran==1){
    spawnApples();
  }else{
    spawnorange();
  }
}


  drawSprites();
}
function spawnApples(){
Apple=createSprite(Math.round(random(50,350)),0,10,10);
Apple.velocityY=3;
Apple.addImage("movingApple",apple_img);
Apple.scale=0.08;
Apple.lifeTime=150;
}

function spawnorange(){
  orange=createSprite(Math.round(random(50,350)),0,10,10);
  orange.velocityY=3;
  orange.addImage("movingorange",orangeImg);
  orange.scale=0.08;
  orange.lifeTime=150;
  }