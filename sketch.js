var monkey, monkey_running;
var banana, bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground;

function preload() {
  monkey_running = loadAnimation(
    "sprite_0.png",
    "sprite_1.png",
    "sprite_2.png",
    "sprite_3.png",
    "sprite_4.png",
    "sprite_5.png",
    "sprite_6.png",
    "sprite_7.png",
    "sprite_8.png"
  );

  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
}

function setup() {
  createCanvas(600, 600);

  ground = createSprite(400, 540, 900, 10);
  ground.velocityX = -4;

  monkey = createSprite(50, 530, 20, 20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.2;

  obstacleGroup = createGroup();
  FoodGroup = createGroup();

  score = 0;
}

function draw() {
  background("white");

  stroke("black");
  textSize(20);
  fill("black");
  score = Math.ceil(frameCount / frameRate());
  text("Survival Time: " + score, 100, 50);

  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }

  if (keyDown("space")) {
    monkey.velocityY = -12;
  }

  monkey.velocityY = monkey.velocityY + 0.8;

  spawnObstacles();
  spawnFood();

  monkey.collide(ground);

  drawSprites();
}

function spawnObstacles() {
  if (frameCount % 300 === 0) {
    obstacle = createSprite(800, 540, 10, 40);
    obstacle.velocityX = -6; //add image to the obstacle
    obstacle.addImage(obstaceImage);
    obstacle.scale = 0.15; //lifetime to the obstacle
    obstacle.lifetime = 300; //add each obstacle to the group
    obstacleGroup.add(obstacle);
  }
}

function spawnFood() {
  if (frameCount % 300 === 0) {
    banana = createSprite(600, 250, 10, 40);
    banana.velocityX = -5; //add image to the obstacle
    banana.addImage(bananaImage);
    banana.scale = 0.15; //lifetime to the obstacle
    banana.lifetime = 300; //add each obstacle to the group
    FoodGroup.add(banana);
  }
}
