var canvas;
var music;
var surface1, surface2, surface3, surface4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaCES
    surface1 = createSprite(20,550,195,30);
    surface1.shapeColor="green"
    surface2 = createSprite(250,550,195,30);
    surface2.shapeColor="red"
    surface3 = createSprite(480,550,195,30);
    surface3.shapeColor="blue"
    surface4 = createSprite(710,550,195,30);
    surface4.shapeColor="orange"



    //create box sprite and give velocity
    box = createSprite(random(20,750),240,30,30);
    box.shapeColour = "white";
    box.velocityX = 4;
    box.velocityY = 9;

   
}

function draw() {
    background(rgb(169,169,169));

   edges = createEdgeSprites();
   box.bounceOff(edges);
   
   
    if(surface2.isTouching(box)){
        box.shapeColor = rgb(255,0,0);
        box.velocityX = 0;
        box.velocityY = 0;
        music.stop();
        
    }

    //add condition to check if box touching surface and make it box


    if(surface1.isTouching(box) && box.bounceOff(surface1)){
        box.shapeColor = rgb(0,128,0);
        music.play();
        
    }

    if(surface3.isTouching(box) && box.bounceOff(surface3)){
        box.shapeColor = rgb(0,0,255);
        music.play();
    }

    if(surface4.isTouching(box) && box.bounceOff(surface4)){
        box.shapeColor = rgb(255,126,0);
        music.play();
    }


    surface1.display();
    surface2.display();
    surface3.display();
    surface4.display();
    box.display();

   
    

    
}
