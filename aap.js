

function colorChange(){
    // console.log("hey")
    console.dir(this.innertext);
    this.style.backgroundColor = "blue"; 
}

let btn = document.querySelector("button");
let p = document.querySelector("p");
let h1 = document.querySelector("h1");
let div = document.querySelector("div");

btn.addEventListener("click", colorChange);
p.addEventListener("click", colorChange);
h1.addEventListener("click", colorChange);
div.addEventListener("click", colorChange);