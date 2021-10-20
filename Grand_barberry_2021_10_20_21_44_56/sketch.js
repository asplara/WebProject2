let capture;
let extraCanvas;
let otherCanvas;
let content = 'Who does the Internet make you?'; 
let yStart = 130; 
let customFont; 
var button;
var bgcolor;
var input;
var button2;
let newCanvas;
let message = '';
let word;
let words = ['An Influencer', 'A Sports Enthusiast', 'A Tech Nerd', 'A Visual Artist', 'A Follower', 'A Comic Creator','An Astrology Girl', 'A Comedian', 'A Niche Microcelebrity', 'A Meme Indulger'];
var index = 0;



function setup() {
  createCanvas(1500, 1500);
  
  capture = createCapture(VIDEO);
  capture.size(320, 240);
  capture.hide();
  extraCanvas =createGraphics(390,240);
  
  otherCanvas=createGraphics(400,300);
  textAlign(CENTER, CENTER); 
  textSize(20);
  
  newCanvas=createGraphics(400,300);
  
  
  
  r = random(255);
	g = random(255);
	b = random(255);
	button = createButton("Choose Background");
	button.mousePressed(changeColor);
	button.position(160, 350);
  
  {let a = createA('http://www.Twitter.com', 'Explore.');
  a.position(1175, 676);
  }
  
}

function draw() {
  
  
  
     
  
  
  background(r,g,b);
  noStroke(); 
  
    
  fill(r-50,g-50,b-50,230)
  rect(1030,70,370,400,20)
  
  {image(newCanvas,0,0);
  image(capture, 1055, 150, 320,240);
  }
  
  image(extraCanvas,0,0);
  image(capture, 100, 70, 320,240);
  
  
  
  
  
  
  
  fill(r-50,g-50,b-50,230)
  rect(560,70,370,400,20)
  for (let y = yStart; y < height-1040; y += 28) { 
    fill(230, y / 2 + 55, 190); 
    text(content, width / 2, y); 
  }
  yStart--;
  if(yStart==90){
    yStart+=120;
    
  
  }
  
  fill(r-50,g-50,b-50,230)
  rect(560,530,370,400,20)
  
  

  
  
  fill(r-50,g-50,b-50,230)
  rect(1030,530,370,400,20)
  
  

  
  
  
  

    fill(255);
  text(message, 580, 700);
  
   fill(255);
  text(words[index], 745, 700);
  
  
    

  
}

function changeColor(){
	r = random(255);
	g = random(255);
	b = random(255);
}




function mousePressed() {
  index = floor(random(words.length));
  
  console.log(index);

  if (index == words.length) {
    index = 0;
  }
  
}




