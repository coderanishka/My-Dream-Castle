class Wall {
    constructor(x, y, width, height) {
      var options = {
          isStatic : true
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
      display(){
        var pos =this.body.position;
       
        push();
        rectMode(CENTER);
        
        stroke("purple");
        strokeWeight(5);
        fill(170,130,25);
        rect(pos.x, pos.y, this.width, this.height);
        pop();
      }
  };