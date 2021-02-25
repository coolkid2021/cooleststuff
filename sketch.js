var dog, happyDog, database
var foodS, foodStock;
function preload()
{
  dog = loadImage("../images/dogImg.png");
  happyDog = loadImage("../images/donImg1.png");
}

function setup() {
  createCanvas(500, 500);
  dog = createSprite(250,250);
  dog.addImage("dog",dog);
  happyDog.addImage("Happy Dog", happyDog)
  database = firebase.database();
  foodStock = database.ref('Food');
    foodStock.on("value", readStock)
}


function draw() {  
  background(46, 139, 87)
  dog.display();
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage(dogHappy)
  }
  drawSprites();
  //add styles here

}
function readStock(data){
  foodS = data.val();
}
function writeStock(x){

  database.ref('/').update({
    Food:x
  })
}


