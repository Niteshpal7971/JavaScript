// Task 1: Write a function stringToNumber that takes a string input and tries to convert it to a number. If the conversion fails, return "Not a number".

function stringToNumber(input) {
    const num = Number(input);
    if(isNaN(num)){
        return `Not a number`
    }else{
        return num
    }
}

// Task 2: Write a function flipBoolean that takes any input and converts it to its boolean equivalent, then flips it. For example, true becomes false, 0 becomes true, etc.

function flipBoolean(input) {
    return !Boolean(input);
}

//Task 3: Write a function whatAmI that takes an input and returns a string describing its type after conversion. If it's a number, return "I'm a number!", if it's a string, return "I'm a string!"

function whatAmI(input) {
    const type = typeof input;

    if (type === 'number') {
        return "I'm a number!";
    } else if (type === 'string') {
        return "I'm a string!";
    } else {
        return "I'm neither a number nor a string!";
    }
}

//Task 4: Write a function isItTruthy that takes an input and returns "It's truthy!" if the value is truthy in JavaScript, or "It's falsey!" if it's falsey.

function isItTruthy(input) {
    if(input){
        return "It's truthy!"
    }else{
        return "It's falsey!"
    }
}