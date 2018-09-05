

var guess = ["red","black","blue","green"];
var guessRemaining = 10;
var guessMade = 0;
var guessStatus = 10;
var computer = (Math.random()*4);
var input1 = document.querySelector("#ipbox");
var output1 = document.querySelector("#output");
var btn = document.querySelector("button");

btn.addEventListener("click",onMouseClick);

function onMouseClick() {
    output1.innerHTML = input1.value;
    for (var i=0; i< guess.length; i++);
}


    







    
