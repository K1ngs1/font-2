function setup(){
    video = createCapture(VIDEO);
    video.size(600, 500)

    canvas = createCanvas(500, 600);
    canvas.position(650, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}

function modelLoaded(){
    console.log('posenet is initiallized')
}