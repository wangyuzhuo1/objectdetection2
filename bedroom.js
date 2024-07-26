function setup(){
    canvas = createCanvas(640, 420)
    canvas.center()
    objectDetector = ml5.objectDetector('cocossd', modelloaded);
    document.getElementById("status").innerHTML="Status: Object Detected";
}

img="";
status1 = "";

function preload(){
    img = loadImage("bedroom.jpg")
}

function modelloaded(){
console.log("Model has been loaded");
status1=true;
objectDetector.detect(img, gotResults);
}

function gotResults(error, results){
    if(error){
        console.error(error)
    }
    console.log(results)
}



function draw(){
    image(img, 0, 0, 50, 50);
    fill("#FF0000");
    text("Flower Picture", 50, 50);
    noFill();
    stroke("#FF0000");
    rect(50, 50, 50, 50);

    if(status1 !=""){
        for(i = 0; i<objects.length; i++){
            document.getElementById("status").innerHTML="Status: Object Detected";
            fill("#FF0000");
            percent = floor(objects[i].confidence*100);
            text(objects[i].label+percent+"%", objects[i].x, objects[1].y);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}