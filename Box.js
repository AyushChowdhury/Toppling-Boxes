class Box{
        constructor(x,y,w,h){
            var option={
                restitution:0.5
              }
            
            this.body=Bodies.rectangle(x,y,w,h,option);
            this.width=w
            this.height=h
            World.add(world,this.body)
        }
    
        display(){
            push()
            translate(this.body.position.x,this.body.position.y)
            rotate(this.body.angle)
            rectMode(CENTER);
            fill("yellow")
            rect(0,0,this.width,this.height)
            pop()
        }
}