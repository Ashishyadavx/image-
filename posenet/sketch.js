let shahrukh_img;
let capture;
let posenet;
let noseX,noseY;
let reyeX,reyeY;
let leyeX,leyeY;
let singlePose,skeleton;

function setup(){
    createCanvas(900,900);
    shahrukh_img =loadImage('shahrukh.jpg');
    capture=createCapture(VIDEO);
    capture.hide()

    posenet = ml5.poseNet(capture,modelLoaded);
    posenet.on('pose',recievedPoses);
}


function recievedPoses(poses){
console.log(poses);
   if (poses.length>0){
     singlePose=poses[0].pose;
     skeleton = poses[0].skeleton;
     //  noseX=singlePose.pose.nose.x;
    //  noseY=singlePose.pose.nose.y;
    
    //  reyeX=singlePose.pose.rightEye.x;
    //  reyeY=singlePose.pose.rightEye.y;

    //  leyeX=singlePose.pose.leftEye.x;
    //  leyeY=singlePose.pose.leftEye.y;

    }
console.log(noseX+""+noseY);
}

function modelLoaded(){
    console.log('model has loaded');
}


function getRandomArbitrary(min,max){
    return Math.random()*(max-min)+min;

}


function draw(){
    // background(200);
    // Point(200,200);
//     line(200,200,300,300);
// rect(500,300,300,100);
// triangle(100,200,300,400,150,451);
// fill(132,100,34,200);
// stroke(255,0,0);
// strokeWeight(5);
// ellipse(100,200,100,100);
// stroke(0,0,255);
// ellipse(250,200,100,100);
// ellipse(400,200,100,100);
// stroke(0,255,0);
// ellipse(550,200,100,100);
// ellipse(700,200,100,100);

// r=getRandomArbitrary(0,255);
// g=getRandomArbitrary(0,255);
// b=getRandomArbitrary(0,255);
// fill(r,g,b);


// ellipse(mouseX,mouseY,50,50);
    // image(shahrukh_img,mouseX,mouseY,100,100);
    image(capture,0,0);
    fill(255,0,0);
    // ellipse(noseX,noseY,10);
    // ellipse(reyeX,reyeY,10);
    // ellipse(leyeX,leyeY,10);
    if(singlePose){
        for(i=0;i<singlePose.keypoints.length; i++){
           ellipse(singlePose.keypoints[i].position.x ,singlePose.keypoints[i].position.y,10);
        }
        stroke(255,255,255);
        strokeWeight(5);
        for(let j=0;j<skeleton.length;j++){
            line(skeleton[j][0].position.x,j<skeleton[j][0].position.y,j<skeleton[j][1].position.x,j<skeleton[j][1].position.y);
        }

        image(shahrukh_img,singlePose.nose.x-40,singlePose.nose.y-60,100,100);
    }


}




