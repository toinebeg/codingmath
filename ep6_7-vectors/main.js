 import { Vector as v } from './vector.js'

 const v1 = v.create(10, 5),
		 v2 = v.create(3,4),
		 //v3 = v1.add(v2),
		 v4 = v1.multiply(2)

console.log(v4.getX())
console.log(v4.getY())
console.log(v4.getAngle())
console.log(v4.getLength())

// v1.setAngle(Math.PI / 6)
// v1.setLength(100)


// console.log(v1.getX())
// console.log(v1.getY())
// console.log(v1.getAngle())
console.log(v1.getLength())
 

