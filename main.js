NoseX = 0;
NoseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;
function preload(){}
function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(550,550);
    canvas.position(560,150);
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
    background('grey');
    textSize(difference);
    text('Veer', NoseX, NoseY);
    document.getElementById("square_side").innerHTML = "width and height of a square will be = "+difference+"px";
    fill('green');
    stroke('green');
}
function modelLoaded(){
    console.log("model is loaded");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        NoseX = results[0].pose.nose.x;
        NoseY = results[0].pose.nose.y;
        console.log("NoseX = "+NoseX+" NoseY = "+NoseY);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX = "+leftWristX+" rightWristX = "+rightWristX+" differnce = "+difference);
    }
}