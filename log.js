class Log {
     constructor(x, y, angle, height) {
       var options = {
           'restitution':0.8,
           'friction':1.3,
           'density':1.0
       }
       this.body = Bodies.rectangle(x, y, 50, height, options);
       this.width = 50;
       this.height = height;
       
       World.add(world, this.body);
       Matter.Body.setAngle(this.body, angle)
     }
     display(){
       var pos =this.body.position;
       var angle = this.body.angle;
       push();
       translate(pos.x, pos.y);
       rotate(angle);
       rectMode(CENTER);
       fill("orange");
       strokeWeight(3);
       stroke("brown");
       rect(0, 0, this.width, this.height);
       pop();
     }
   };