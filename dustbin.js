class Dustbin{
    constructor(x,y,width,height){
        var ground_options ={
            isStatic: true
        }
    
       this.dustbin = Bodies.rectangle(x,y,width,height,ground_options);
    
       this.width=width
       this.height=height
       this.image=loadImage("dustbingreen.png")
      
        World.add(world,this.dustbin);   
    }
    display(){
        var pos=this.dustbin.position
        
      imageMode(CENTER)
        
    image(this.image,pos.x,pos.y,this.width,this.height)
      
    }
}