class Ball{
  constructor(x, y, r, angle) {
      var options = {
          //restitution:0.8,
          frictionAir:0.005,
          density:0.5
      }
      this.body = Bodies.circle(x, y, r, options);
     // this.width = width;
      this.r = r;
     //this.image = loadImage("sprites/base.png");
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      //ellipseMode(RADIUS);
      ellipse( 0, 0, this.r,this.r);
      pop();
    }
}