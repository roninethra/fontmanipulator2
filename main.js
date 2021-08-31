nosex= 0;
nosey= 0;
wristrightx= 0;
wristleftx= 0;
dimensions=10;

function setup(){
video= createCapture(VIDEO);
video.size(500,500);
canvas= createCanvas(500,500);
canvas.center();
poseNet= ml5.poseNet(video, modelloaded);
poseNet.on("pose", gotPoses);
}

function draw(){
background("#DA70D6");
textSize(dimensions);
text('Hi', nosex, nosey);
}

function gotPoses(results){
if(results.length>0){
    console.log(results);
    nosex= results[0].pose.nose.x;
    nosey= results[0].pose.nose.y;
    wristrightx= results[0].pose.rightWrist.x;
    wristleftx= results[0].pose.leftWrist.x;
    dimensions= Math.abs(floor(wristrightx-wristleftx)/2);

    document.getElementById("widthandheightlabel").innerHTML= "The font size of the word is: "+ dimensions;
}
}

function modelloaded(){
console.log("You didn't get lost!!!");

}


