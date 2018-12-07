var video;
var vScale=16;

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width/vScale, height/vScale);
  video.hide();
}

function draw() {
  background(0);

  video.loadPixels();
  loadPixels();
  for (var y = 0; y < video.height; y++) {
    for (var x = 0; x < video.width; x++) {
      var index = (video.width - x + 1 + y * video.width)*4;
      var r = video.pixels[index+0];
      var g = video.pixels[index+1];
      var b = video.pixels[index+2];

      var bright = (r+g+b)/3;

      var w = map(bright, 0, 255, 0, vScale);

      noStroke();
      function getRandomColor() {
  // creating a random number between 0 and 255
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);

  // going from decimal to hex
  var hexR = r.toString(16);
  var hexG = g.toString(16);
  var hexB = b.toString(16);

  // making sure single character values are prepended with a "0"
  if (hexR.length == 1) {
    hexR = "0" + hexR;
  }

  if (hexG.length == 1) {
    hexG = "0" + hexG;
  }

  if (hexB.length == 1) {
    hexB = "0" + hexB;
  }

  // creating the hex value by concatenatening the string values
  var hexColor = "#" + hexR + hexG + hexB;

  return hexColor.toUpperCase();
}

      fill(getRandomColor());
      rectMode(CENTER);
      rect(x*vScale, y*vScale, w, w);


    }
  }


}

// start of new code



/* var vScale = 16;

function setup() {
  createCanvas(640, 480);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width/vScale, height/vScale);
}

function draw() {
  background(51);

  video.loadPixels();
  loadPixels();
  for (var y = 0; y < video.height; y++) {
    for (var x = 0; x < video.width; x++) {
      var index = (video.width - x + 1 + (y * video.width))*4;
      var r = video.pixels[index+0];
      var g = video.pixels[index+1];
      var b = video.pixels[index+2];

      var bright = (r+g+b)/3;

      var w = map(bright, 0, 255, 0, vScale);

      noStroke();
      fill(255);
      rectMode(CENTER);
      rect(x*vScale, y*vScale, w, w);

    }
  }

} */
