let x,y;

let xA = [];
let yA = [];

class Particle{
    constructor(){
        this.x=random(0,400)
        this.y=random(0,400)
    }
    update(){
        this.x+=2*random(-1,1);
        this.y+=2*random(-1,1);
    }
    drawParticle(){
        ellipse(this.x,this.y,10)
    }
}
let pa = [];

function setup() {
    createCanvas(400, 400);
    /*x=width/2;
    y=height/2;*/
    for(let i = 0; i < 50; i++){
        pa.push(new Particle());
    }
  }
  
  function draw() {
    background(220);
    for(let i = 0; i < pa.length; i++){
        pa[i].update();
        pa[i].drawParticle();
    }
    /*
    Other way of doing this: 
    pa.forEach(function (el){
        el.update();
        el.draw();
    })
    */
}