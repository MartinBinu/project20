var car,wall;

var speed,weight;

var deformation;

function setup() {

  createCanvas(1600,400);

  car = createSprite(50,200,50,50);

  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor = "white";

  speed = Math.round(random(55,90));

  weight = Math.round(random(400,1500));

  car.velocityX = speed;

}

function draw() {

  background("black");  
  
  console.log(wall.height);

  if(car.x - wall.x > (car.width + wall.width)/2){

    car.velocityX = 0;

    deformation = Math.round((0.5*weight*speed*speed)/22550);

    if(deformation > 180){
      car.shapeColor = "red";
    }

    if(deformation < 180 && deformation > 100){
      car.shapeColor = "yellow";
    }

    if(deformation < 100){
      car.shapeColor = "green";
    }

  }
    
  drawSprites();

    text("Weight: " + weight,800,20);
    text("Speed: " + speed,800,30);
    text("Deformation: " + deformation,800,40);

}