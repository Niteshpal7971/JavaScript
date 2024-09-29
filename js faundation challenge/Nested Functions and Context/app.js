// Task 1: Using this in Objects
// Create an object person with a method introduce() that uses thisadditionally add properties of name & age that will result in Hi, my name is Hitesh and I am 19.5 years old on calling introduce()

const person = {
    Name: "Nitesh",
    Age: 24,
    Introduce: function(){return `Hi, my name is ${this.Name} and I am ${this.age} years old `}
};


// Task 2: Function within a function
// Write a function outer() that contains another function inner() and returns a value of 'Inner function called' on calling outer()

function outer(){
    function inner(){
        return "Inner function called"
    }
    return inner()
}
console.log(outer);