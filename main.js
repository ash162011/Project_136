status = "";

function setup(){
     canvas = createCanvas(500, 350);
     canvas.position(535,350);

     video = createCapture(VIDEO);
     video.hide();

     objectDetector = ml5.objectDetector('cocossd', modelLoaded);
     document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded(){
     console.log("Model Loaded!");
     status = true;
}

function start(){
     objectDetector = ml5.objectDetector('cocossd', modelLoaded);
     document.getElementById("status").innerHTML = "Status : Detecting Objects";
     object = document.getElementById("object").value;
}

function draw(){
     image(video, 0, 0, 500, 350);
}