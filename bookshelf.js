status = "";

function preload() {
    bookshelf = loadImage("bookshelf.jpg");
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
}

function modelLoaded() {
console.log("CocoSSD model is loaded.");
}

function setup() {
    canvas = createCanvas(480, 380);
    canvas.center();
    background("white");
}

function draw() {

}


function gotResult(error, results) {
    if(error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}