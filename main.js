let myInterval = undefined;
let T = 36.5;
let r = [80, 6, 11, 12, 8, 35]
let v = [0, T/8.8, T/22.4, 1, T/68.7, T/433];
let t = 0;

let canvas;
let context;
let width;
let hegiht;

function main() {
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    width = canvas.width;
    height = canvas.height; 
    draw();   
}

function start()
{
    if (typeof(myInterval) == "undefined")
    {
        startDrawing();
    }
}

function stop()
{
    clearInterval(myInterval);
    myInterval = undefined;
}


function reset()
{
    t = 0;
    if (typeof(myInterval) == "undefined")
        draw();
    else
    {
        stop();
        startDrawing();
    }
}


function startDrawing()
{
    myInterval = setInterval(function(){
        draw();
        }, 50)
}


function draw()
{
    context.clearRect(0, 0, width, height);
    
    drawCircle(context, width/2, height/2, r[0], 'yellow');
    drawCircle(context, Math.cos(v[1] * t/T*2*Math.PI) * (r[0] + 40) + width/2, - Math.sin(v[1] * t/T*2*Math.PI) * (r[0] + 40) + height/2, r[1], 'brown');
    drawCircle(context, Math.cos(v[2] * t/T*2*Math.PI) * (r[0] + 80) + width/2, - Math.sin(v[2] * t/T*2*Math.PI) * (r[0] + 80) + height/2, r[2], 'orange');
    drawCircle(context, Math.cos(v[3] * t/T*2*Math.PI) * (r[0] + 120) + width/2, - Math.sin(v[3] * t/T*2*Math.PI) * (r[0] + 120) + height/2, r[3], 'blue');
    drawCircle(context, Math.cos(v[4] * t/T*2*Math.PI) * (r[0] + 180) + width/2, - Math.sin(v[4] * t/T*2*Math.PI) * (r[0] + 180) + height/2, r[4], 'red');
    drawCircle(context, Math.cos(v[5] * t/T*2*Math.PI) * (r[0] + 370) + width/2, - Math.sin(v[5] * t/T*2*Math.PI) * (r[0] + 370) + height/2, r[5], 'green');

    document.getElementById("time").innerHTML = parseInt(t * 10);
    t = t + 0.05; 
}

function drawCircle(context, x, y, mr, color) {
    context.beginPath();
    context.arc(x, y, mr, 0, 2 * Math.PI);
    context.fillStyle = color;
    context.fill();
    context.lineWidth = 0;
    context.strokeStyle = color;
    context.stroke();
}

function showSimulation()
{
    document.getElementById("home").style.display = "none";
    document.getElementById("simulation").style.display = "block";
}

function showHome()
{
    document.getElementById("home").style.display = "block";
    document.getElementById("simulation").style.display = "none";
    stop();
}