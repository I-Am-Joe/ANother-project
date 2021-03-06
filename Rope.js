class Rope{
    constructor(body1,body2,offestX,offestY){
        this.offestX=offestX;
        this.offestY=offestY;
        var options={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offestX,y:this.offestY}
        }
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }
    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        strokeWeight(4);
        line(pointA.x,pointA.y, pointB.x,pointB.y);
    }
}