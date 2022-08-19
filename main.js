function setup() {
    canvas = createCanvas(400, 400);
    canvas.position(560, 210);
    video = createCapture(VIDEO);
    video.size(550, 500);
    //POSENET THING//
    poseNet = ml5.poseNet(video, modeloaded);
    poseNet.on('pose', gotPoses);
  }

function draw()
{
  background("#000000");
}

function modeloaded()
{
  console.log('PoseNet is INITIALIZED!!!');
}

function gotPoses()
{
  if(results.length > 0)
  {
    console.log(results);
  }
}