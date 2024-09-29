// todo app
/*
let todo = [];
let req = prompt("please enter your requst");

while(true){
    if (req == "quit"){
        console.log("you quit");
        break;
    }
    if (req == "list"){
        console.log("_____________");
        for(let i=0; i<todo.length; i++){
            console.log(i, todo[i]);
        }
        console.log("_____________")
    }
    else if(req == "add") {
        let task = prompt("please enter the task you want to add");
        todo.push(task);
        console.log("task added");
    }
    else if(req == "delete") {
        let del = prompt("please enter the task you want to delete");
        todo.splice(del, 1);
        console.log("task deleted")
    }
    else{
        console.log("Wrong request")
    }

    req = prompt("please enter your requst");
}*/

// quessing game
/*
max = prompt("enter the max number");
const random = Math.floor(Math.random()*max)+1;
guess = prompt("Guess the number : ");
while(true){
    if(guess == "quit"){
        console.log("you quited the game");
        break;
    }

    if(guess == random){
        console.log("congratulations!!, your quess is right",random);
        break;
    }
    else if(guess > random){
        guess = prompt(" 'Hint' your guess is too large. please try small number");
    }
    else{
        guess = prompt(" 'Hint' your guess is too small. please try large number");
    }
}*/
/*
let arr = [];
// let number = 3;
let filteredarr = [];
function returnArry(arr,number){
    for(let i=0; i<arr.length; i++){
        if(arr[i]>number){
            filteredarr.push(arr[i]);
        }
    }
    console.log(filteredarr);
}*/

