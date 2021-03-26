const v = class Vector{
    static create(x,y){
        return new Vector(x,y)
    }
    constructor(x, y){
        this._x = x || 1;
        this._y = y || 0;
    } 
    setX(value){
        this._x = value
    }
    getX(){
        return this._x
    }

    setY(value){
        this._y = value
    }
    getY(){
        return this._y
    }

    setAngle(angle){
        const length = this.getLength()
        this._x = Math.cos(angle) * length
        this._y = Math.sin(angle) * length
    }

    getAngle(){
        return Math.atan2(this._y,this._x)
    }

    setLength(length){
        var angle = this.getAngle()
        this._x = Math.cos(angle) * length
        this._y = Math.sin(angle) * length
    }
    getLength(){
		return Math.sqrt(this._x * this._x + this._y * this._y);
    }

    add(v2){
        return Vector.create(this._x + v2.getX(), this._y + v2.getY() )
    }
    
    substract(v2){
        return Vector.create(this._x - v2.getX(), this._y - v2.getY())
    }
    
    multiply(val){
        return Vector.create(this._x * val, this._y * val)
    }

    divide(val){
        return Vector.create(this._x / val, this._y / val)
    }
    
    addTo(v2){
        this._x += v2.getX()
        this._y += v2.getY()
    }
    substractFrom(v2){
        this._x -= v2.getX()
        this._y -= v2.getY()
    }
    multiplyBy(v2){
        this._x *= v2.getX()
        this._y *= v2.getY()
    }
    divideBy(v2){
        this._x /= v2.getX()
        this._y /= v2.getY()
    }
} 