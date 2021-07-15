class Launcher{

    constructor(bodyA,pointB){

        var options ={
           bodyA : bodyA,
           bodyB : pointB,
           stiffness : 0.04,
           length : 5
        }

      this.launcher = Constraint.create(options);
      this.pointB = pointB;
      World.add(world,this.launcher);
    }

    attach(body){

        this.launcher.bodyA = body;
    }

    fly(){

        this.launcher.bodyA = null;
    }

    display(){

        if(this.launcher.bodyA){
        
        push()
        strokeWeight(5);
        line(this.launcher.bodyA.positio.x,this.launcher.bodyA.positio.y,this.pointB.x,this.pointB.y);
        pop()

        }


       

    }



}