class Window {
    constructor(x,y,radius){
     var option={
       isStatic:true
     }
       this.body = Bodies.circle(x,y,radius,option);
       World.add(world,this.body);
    }
    
    display(){
     push();    
     ellipseMode(RADIUS);
     strokeWeight(5);
     stroke("purple"); 
     fill(255);  
     pop();
    }
}