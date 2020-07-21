class Paper{
    constructor(x,y,radius){
        var options = {
            restitution: 0.3,
            isStatic:false,
            density:1.2,
            friction:0.5
        }
        this.x =x;
        this.y = y;
        this.radius = radius;
        this.body = Bodies.circle(x, y, radius,options);
        World.add(world, this.body);

    }

    display(){
        
var pos = this.body.position;
        ellipseMode(RADIUS);
        fill("pink");
        ellipse(pos.x,pos.y,this.radius, this.radius);   
    } 

}