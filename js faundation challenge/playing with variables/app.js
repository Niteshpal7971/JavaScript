// Task:Perform the following mathematical operations
// on the provided variables a and b

// 1.Add

// 2.Subtract

// 3.Multiply

// 4.Divide

// 5.Increment

// 6.Decrement

// 7.Reminder

// **** DO NOT CHANGE the values *****
const a = 18;
const b = 24;

// Addition of two values
function add() {
    const result = a + b;
    return result;
}

// Subtract small value from larger one
function subtract() {
    const result = b - a;
    return result;
}

function multiply() {
    const result = a * b;
    return result;
}

// Divide larger value by small
function divide() {
    const result = b / a;
    return result;
}

// Increase value of a by 1
function increment() {
    let result = a;
    result += 1;
    return result;
}

// Decrease value of b by 1
function decrement() {
    let result = b;
    result -= 1;
    return result;
}

// Divide larger value by small to find the reminder
function reminder() {
    const result = b % a;
    return result;
}