const RED = "stop";
const GREEN = "go";
const YELLOW = "slow down";
var signalState="";

function setup() {
  createCanvas(600, 200);
}
function draw() {
  //setting the background
  background("lightblue");
  fill(0);
  text(" Press Arrow keys to change the game state ",100,50);
  text(" UP: red     RIGHT: yellow     DOWN: green ",100,70);
  if(keyWentDown("up"))
  {
    signalState = RED;
  }
  if(keyWentDown("right"))
  {
    signalState = YELLOW;
  }
  if(keyWentDown("down"))
  {
    signalState = GREEN;  
  }
  textSize(20);
  fill(0);
  text("Signal State: "+signalState,100,150);
}

