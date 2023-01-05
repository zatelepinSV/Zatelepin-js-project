var fon = document.getElementById('wrapper');
var canvas = document.querySelector('canvas');
var deg = Math.PI / 180;
var bodySize = document.body.getBoundingClientRect();


createBackground();

function createBackground() {
  fon.appendChild(createCanvas());
  var canvas = document.getElementById('cnv');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  var canvasW = canvas.width;
  var canvasH = canvas.height;
  //canvas.setAttribute('width', bodySize.width * 1 + 'px');
  //canvas.setAttribute('height',  bodySize.width * 0.65 + 'px');
  var context = canvas.getContext('2d');
  stolb(context, canvasW, canvasH);
  createGrass(context, canvasW, canvasH);
}

function createField() {
  var fieldLightGreen = document.createElement('div');
  fieldLightGreen.style.position = 'absolute';
  fieldLightGreen.style.width = 100 + 'vw';
  fieldLightGreen.style.height = 40 + '%';
  fieldLightGreen.style.bottom = 0 + 'px';
  fieldLightGreen.style.backgroundColor = '#54C867';
  return fieldLightGreen;
}

function createCanvas() {
  var canvas = document.createElement('canvas');
  //canvas.style.width = 600 + 'px';
  //canvas.style.height =;
  canvas.id = 'cnv';
  return canvas;
}

function stolb(context, width, height) {

  context.lineWidth = 1;
  for (var k = 0; k < width; k += 70) {
    //context.beginPath();
    var e = Math.floor(Math.random() * (80 - 40)) + 40;
    context.fillStyle = '#9BA4A9'
    context.strokeStyle = 'brown';
    context.fillRect(k, 0, e, height);
    //context.closePath();
    k += e;
  }
  context.beginPath();
  context.fillStyle = '#41A54B';
  context.fillRect(0, height - 100, width, 100);
  context.fillStyle = '#48B758';
  context.fillRect(0, height - 200, width, 100);
  context.fillStyle = '#54C867';
  context.fillRect(0, height - 300, width, 120);
  context.closePath();
}

function createGrass(context, width, height) {
  context.beginPath();
  context.strokeStyle = 'red';
  context.moveTo(100.5, 100.5);
  context.lineTo(150.5, 150.5);
  context.lineTo(200.5, 100.5);
  context.closePath();
  context.fill();
  context.stroke();
  console.log(height)
  for (var k = 0; k < width; k += 300) {
    var e = Math.floor(Math.random() * (width - 0)) - k;
    var m = Math.floor(Math.random() * (height - (height - 300))) + (height - 300);
    context.beginPath();
    context.fillStyle = '#fff';
    context.ellipse(e, m, 8, 16, 0, 0, deg * 360, true);
    context.closePath();
    context.fill();
    //context.stroke();

    context.beginPath();
    context.fillStyle = '#562908';
    context.arc(e, m, 20, 0, deg * 180, true);
    context.closePath();
    //context.stroke();
    context.fill();
  }

}
