class Ball {
  constructor(x, y,radius) {
    var options = {
      'isStatic':false,
      'restitution':1,
      'friction':1.7,
      'density':1.2,
    }
    this.body = Bodies.circle(x, y,radius, options);
    this.radius=radius    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    this.body.position.x=this.body.position.x
    this.body.position.y=this.body.position.y   
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    ellipseMode(RADIUS);
    fill(142,255,255);
    ellipse(0,0,this.radius,this.radius);
    pop();
  }
}