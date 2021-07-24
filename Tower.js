class Tower{
    constructor(x,y,width,height)
    {


        var options={
            isStatic:true
        };
        this.image=loadImage("assets/tower.png");
        this.width=width;
        this.height=height;
        this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,options);
        World.add(world,this.body);
    }
     display()
     {
         var pos=this.body.position;
         var angle=this.body.angle;
         push();
         translate(pos.x,pos.y);
         rotate(angle);
         imageMode(CENTER);
         image(this.image,81,342,this.width,this.height);
         pop();
     }
}