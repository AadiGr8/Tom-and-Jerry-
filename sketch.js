var mouseImg, catImg;
var cat, mouse;
var mouse1Img,cat1Img;
var garden, gardenImg;
var cat2Img,mouse2Img;

function preload() {
    //load the images here

    mouseImg = loadImage("images/mouse4.png");
    catImg = loadImage("images/cat1.png");
    cat1Img = loadAnimation("images/cat2.png","images/cat3.png");
    mouse1Img = loadAnimation("images/mouse2.png","images/mouse3.png");
    gardenImg = loadImage("images/garden.png");
    cat2Img = loadAnimation("images/cat4.png");
    mouse2Img = loadAnimation("images/mouse1.png")

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    garden = createSprite(500,400,1000,800);
    garden.addImage(gardenImg);
    garden.scale=1.1;

    cat = createSprite(800,650,20,20);
    cat.addImage(catImg);
    cat.addAnimation("running",cat1Img);
    cat.addAnimation("runnin",cat2Img);
    cat.scale = 0.2;
    
    mouse = createSprite(100,650,20,20);
    mouse.addImage(mouseImg);
    mouse.addAnimation("walking",mouse1Img);
    mouse.addAnimation("walkin",mouse2Img);
    mouse.scale=0.1;

}

function draw() {

    background(2);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x-mouse.x < (cat.width-mouse.width)){
        cat.changeAnimation("runnin",cat2Img);
        mouse.changeAnimation("walkin",mouse2Img);
        cat.velocityX=0;
    }else{
        cat.addImage(catImg);
        mouse.addImage(mouseImg);
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode === LEFT_ARROW){
      mouse.addAnimation("teasing",mouse1Img);  
      mouse.changeAnimation("walking");
      mouse.frameDelay=25;

      cat.addAnimation("catRunning",cat1Img);
      cat.changeAnimation("running");
      cat.velocityX=-2;
  }



}
