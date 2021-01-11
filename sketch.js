var tom,jerry,garden,tomimg1,tomimg2,tomimg3,jerryimg1,jerryimg2,jerryimg3;


function preload() {
    //load the images here
    tomimg1=loadAnimation("images/tomOne.png");
    tomimg2=loadAnimation("images/tomTwo.png","images/tomThree.png");
    tomimg3=loadAnimation("images/tomFour.png");

    jerryimg1=loadAnimation("images/jerryOne.png");
    jerryimg2=loadAnimation("images/jerryTwo.png","images/jerryThree.png");
    jerryimg3=loadAnimation("images/jerryFour.png");

garden=loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom=createSprite(850,700,20,20);
    tom.addAnimation("tom",tomimg1)
    tom.scale=0.2;

    jerry=createSprite(100,700,20,20);
    jerry.addAnimation("jerry",jerryimg1);
    jerry.scale=0.1;
}

function draw() {

    background(garden);
    //Write condition here to evalute if tom and jerry collide
if (tom.x - jerry.x < (tom.width - jerry.width)/2){

    tom.velocityX=0;
    tom.addAnimation("tomlastimg",tomimg3);
    tom.x= 200;
    tom.scale=0.2;
    tom.changeAnimation("tomlastimg");

   
    jerry.addAnimation("jerrylastimg",jerryimg3);
    jerry.scale=0.1;
    jerry.changeAnimation("jerrylastimg");
}
 
    drawSprites();
   
}


function keyPressed(){

  //For moving and changing animation write code here
if (keyCode === LEFT_ARROW){

    tom.velocityX=-5;
    tom.addAnimation("tomrunning",tomimg2);
    tom.changeAnimation("tomrunning");

    jerry.addAnimation("jerryteasing",jerryimg2);
    jerry.changeAnimation("jerryteasing");

}

}
