$(document).ready(function(){

init();
init2();
window.addEventListener('keydown',doKeyDown,true);
buttonPress();
});

var sun = new Image();
var moon = new Image();
var earth = new Image();

function init() {
  sun.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png';
  moon.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png';
  earth.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png';
  window.requestAnimationFrame(draw);
}

function draw() {
  var ctx = document.getElementById('firstCan').getContext('2d');

  ctx.globalCompositeOperation = 'destination-over';
  ctx.clearRect(0, 0, 300, 300); // clear canvas

  ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
  ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)';
  ctx.save();
  ctx.translate(150, 150);

  // Earth
  var time = new Date();
  ctx.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds());
  ctx.translate(105, 0);
  ctx.fillRect(0, -12, 40, 24); // Shadow
  ctx.drawImage(earth, -12, -12);

  // Moon
  ctx.save();
  ctx.rotate(((2 * Math.PI) / 6) * time.getSeconds() + ((2 * Math.PI) / 6000) * time.getMilliseconds());
  ctx.translate(0, 28.5);
  ctx.drawImage(moon, -3.5, -3.5);
  ctx.restore();

  ctx.restore();
  
  ctx.beginPath();
  ctx.arc(150, 150, 105, 0, Math.PI * 2, false); // Earth orbit
  ctx.stroke();
 
  ctx.drawImage(sun, 0, 0, 300, 300);

  window.requestAnimationFrame(draw);
}

init();



/* _________________________ */


var canvas;
var ctx;
var dx = 5;
var dy = 5;
var x = 150;
var y = 100;
var WIDTH = 300;
var HEIGHT = 200;

function circle(x,y,r) {
ctx.beginPath();
ctx.arc(x, y, r, 0, Math.PI*2, true);
ctx.fill();
}

function rect(x,y,w,h) {
ctx.beginPath();
ctx.rect(x,y,w,h);
ctx.closePath();
ctx.fill();
ctx.stroke();
}

function clear() {
ctx.clearRect(0, 0, WIDTH, HEIGHT);
}

function init2() {
canvas = document.getElementById("secCan");
ctx = canvas.getContext("2d");
return setInterval(draw2, 10);
}

function doKeyDown(evt){
switch (evt.keyCode) {
case 38:  /* Up arrow was pressed */
if (y - dy > 0){
y -= dy;
}
break;
case 40:  /* Down arrow was pressed */
if (y + dy < HEIGHT){
y += dy;
}
break;
case 37:  /* Left arrow was pressed */
if (x - dx > 0){
x -= dx;
}
break;
case 39:  /* Right arrow was pressed */
if (x + dx < WIDTH){
x += dx;
}
break;
}
}

function draw2() {
clear();
ctx.fillStyle = "black";
ctx.strokeStyle = "black";
rect(0,0,WIDTH,HEIGHT);
ctx.fillStyle = "purple";
circle(x, y, 10);
}


function buttonPress(){
$("#up").click(function(){

    if (y - dy > 0){
        y -= dy;
        }

})


$("#down").click(function(){

    if (y + dy < HEIGHT){
        y += dy;
        }

})


$("#left").click(function(){

    if (x - dx > 0){
        x -= dx;
        }

})


$("#right").click(function(){

    if (x + dx < WIDTH){
        x += dx;
        }
})

}