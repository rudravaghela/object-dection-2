img = "";
status = "";
function setup(){
canvas = createCanvas(600,500);
canvas.center();
objectdetector = ml5.objectDetector("cocossd",modelLoaded);
document.getElementById("status").innerHTML = "status: dectecting objects";
}

function draw(){
image(img,0,0,600,500);
fill("#4287f5");
text("golden retriver",110,50);
textSize(20);
stroke("#ff0000");
noFill();
rect(30,60,300,400);
fill("#ffa200");
text("cat",350,100);
textSize(20);
stroke("#ff0000");
noFill();
rect(280,100,250,380);

}

function preload(){
img = loadImage("dog_cat.jpg");

}

function modelLoaded()
{
    console.log("model Loaded!");
    status = true;
    objectdetector.detect(img,gotResult);
}

function gotResult(error,results){
    if (error){
        console.error(error);
    }
    console.log(results);

}
