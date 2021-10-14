class Snow{
    constructor(x, y,r) {
        var options = {
            'restitution':0.5,
            'friction':0.1,
            'isStatic':false
        }
        this.r=r
        this.body = Bodies.circle(x, y,this.r, options);
        this.image = loadImage("snow4.webp");
        World.add(world, this.body);
      }
      display(){
        
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r,this.r);
        pop();
      }
}