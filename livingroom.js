status = "";

function preload() {
    livingroom = loadImage("living room.jpeg");
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
}

function modelLoaded() {
console.log("CocoSSD model is loaded.");
status = true;
objectDetector.detect(livingroom, gotResult);
}

function setup() {
canvas = createCanvas(480, 380);
canvas.center();
background("white");
}

function draw() {
if(status != "") {
    for(i = 0;i < objects.length; i++) {
        document.getElementById("status").innerHTML = "Status: Objects Detected";

        fill("#C1666B");
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
        noFill();
        stroke("#C1666B");
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
    }
}
}


function gotResult(error, results) {
    if(error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}