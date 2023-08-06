function preload()
{

}

function setup()
{
          canvas = createCanvas(200,200);
          video = createCapture(VIDEO);
          video.hide;
}

function draw()
{
          Image(video,0,0,200,200);
}

function take_snapshot()
{
          save("newImage.png");
}