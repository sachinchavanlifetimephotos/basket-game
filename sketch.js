var iss, spaceCraft, bg, issImg, scImg; 
var hasDock=false;  



function preload(){ 
bg=loadImage("spacebg.jpg"); 
issImg=loadImage("iss.png"); 
scImg=loadImage("spacecraft1.png"); 
scImg1=loadImage("spacecraft2.png"); 
scImg2=loadImage("spacecraft3.png"); 
scImg3=loadImage("spacecraft4.png");
}

function setup() {
  createCanvas(600,350); 

  spaceCraft=createSprite(285, 240, 50, 50); 
spaceCraft.addImage(scImg); 
spaceCraft.scale=0.15; 

iss=createSprite(330, 130, 50, 50); 
iss.addImage(issImg); 
iss.scale=0.25; 
}

function draw() {
  background(bg); 
   spaceCraft.addImage(scImg); 
   if(!hasDock){ 
     spaceCraft.x=spaceCraft.x+random (-1,1)

     if(keyDown("UP_ARROW")){ 
       spaceCraft.y=spaceCraft.y-2
     } 
     if(keyDown("LEFT_ARROW")){  
       spaceCraft.addImage(scImg3)
      spaceCraft.x=spaceCraft.x-2
    } 
    if(keyDown("RIGHT_ARROW")){  
      spaceCraft.addImage(scImg2)
     spaceCraft.x=spaceCraft.x+2
   } 
   if(keyDown("DOWN_ARROW")){  
    spaceCraft.addImage(scImg1)
   
 } 

   } 
   if(spaceCraft.y<=(iss.y+70)&& spaceCraft.x<=(iss.x-10)){ 
     hasDock=true; 
     textSize(25); 
     fill ("white"); 
     text ("docking successfull",200,300); 
   }
  drawSprites(); 
  
}