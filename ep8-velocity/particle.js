const Particle = class Particle {

    static create(x, y, speed, direction){
        return new Particle(x,y,speed,direction)
    }

    constructor(x, y, speed, direction){
        this.position = v.create(x,y)
        this.velocity = v.create(0,0)
        this.velocity.setLength(speed)
        this.velocity.setAngle(direction)
    }

    update(){
        this.position.addTo(this.velocity)
    }

} 