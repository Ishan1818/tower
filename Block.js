class Block {
    constructor(x,y,width,height) {
      var options = {
        restitution:0.5,
        friction: 0.0,
        isStatic:false
        
      }
      
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    
      
 /*if(this.body.speed < 4){
   fill(color);
   var angle= this.body.angle;
   var pos = this.body.position;
   push();
   translate(pos.x,pos.y);
   rotate(angle);
   rectMode(CENTER);
   rect(0, 0, this.width, this.height);
   pop();
       }
       else{
 
              World.remove(world, this.body);
              
                       
       }*/

    }
    display(){
      fill("blue");
      push();
      translate(this.body.position.x,this.body.position.y);
      rectMode(CENTER);
     
      rect(0,0, this.width, this.height);
      pop();
    }
  }