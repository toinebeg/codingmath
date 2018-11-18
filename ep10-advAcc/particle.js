const particle = class Particle {

    static create(x, y, speed, direction, grav){
        return new Particle(x,y,speed,direction, grav)
    }

    constructor(x, y, speed, direction, grav){
        this.position = vector.create(x,y)
        this.velocity = vector.create(0,0)
        this.velocity.setLength(speed)
        this.velocity.setAngle(direction)
        this.gravity = vector.create(0, grav || 0)
          
    }

    accelerate(accel){
        this.velocity.addTo(accel)
    }

    update(){
        this.velocity.addTo(this.gravity)
        this.position.addTo(this.velocity)
    }

} 