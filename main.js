function preload(){}
function setup() {
    canvas=createCanvas(185,285);
    canvas.position(280, 550);
    video = createCapture(VIDEO);
    video.hide()
     
    tint_color = "";
}
function draw(){
    image(video,13,15,425,300);

}

function snapshot(){
    save('p5.png');
}
