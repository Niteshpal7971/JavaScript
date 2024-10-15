//Task: Prototype Chaining

// //Create a constructor function Animal that has a method speak() that return 'Animal speaking'.
// Then create another constructor Dog that inherits from Animal using prototypes.
// The Dog constructor should add a method bark() that returns 'Woof!'. Demonstrate the prototype chain between Dog and Animal.

// function Animal(){};
// Animal.prototype.speak = function(){
//     return 'Animal speaking'
// }

// Dog.prototype = Object.create(Animal.prototype)

// function Dog(){}
// Dog.prototype.bark = function Dog(){
//     return 'Woof!' 
// }

// Dog.prototype.constructor = Dog;


// const myDog = new Dog()
// console.log(myDog.speak())
// console.log(myDog.bark())

// Task 1

class Shape{
    area(){
        return 0
    }
}

class Circle extends Shape{
    constructor(radius){
        super()
        this.radius = radius
    }

    area(){
        return Math.PI*this.radius*this.radius;
    }
}
class Ractangle{
 constructor(width, height){
    this.width = width;
    this.height = height;
 }

area(){
    return this.height*this.width;
}
}

const area = new Circle(6)
console.log(area.area())