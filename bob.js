class Bob {
    constructor(x, y, width, height) {
      var options = {
          isStatic: false,
          restitution:0.3,
          friction:0.5,
          density:1.2
      }
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 50;
      this.height = 50;
      World.add(world, this.body);
    }
    display(){
      push();
      translate(this.body.position.x, this.body.position.y);
      rectMode(CENTER);
      fill("pink");
      stroke("white");
      strokeWeight(3);
      pop();
    }
  } 