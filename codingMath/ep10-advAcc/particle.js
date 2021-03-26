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
        this.mass =1
          
    }

    accelerate(accel){
        this.velocity.addTo(accel)
    }

    update(){
        this.velocity.addTo(this.gravity)
        this.position.addTo(this.velocity)
    }

    angleTo(p2){
        Math.atan2(p2.position.getY() - tnis.position.getY(), p2.position.getX() - this.position.getX())
    }

    distanceTo(p2){
        const dx = p2.position.getX() - this.position.getX()
        const dy = p2.position.getY() - this.position.getY()

        return Math.sqrt(dx * dx + dy * dy)       
    }

    gravitateTo(p2){
        const grav = vector.create(0,0)
        const dist = this.distanceTo(p2)

        grav.setLength(p2.mass / (dist * dist))
        grav.setAngle(this.angleTo(p2))

        this.velocity.addTo(grav)
    }
} 