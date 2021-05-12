class Blocks {
    constructor(x,y) {
      var options = {
      restitution : 0.4,
      }
      this.body = Bodies.rectangle(x,y,30,40,options);
      this.width = 30;
      this.height = 40;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      push();
      translate (pos.x,pos.y);
      rotate (this.body.angle);
      rect(0, 0, this.width, this.height);
      pop();
    }
  };