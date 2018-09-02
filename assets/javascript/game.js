var $ = function (id){
    return document.getElementById(id);
} 

var game = [ "BEEF", "CHICKEN", "PORK", "FISH"]
var choice = Math.floor(Math.random()*game.length);
var answer = game[choice];
var myLength = answer.length;
var display=[myLength];
var win = myLength;
var letters = answer.split("");
var attemptsLeft= 10;
var output = "";
var userLetter= "";

var setup = function()
{
    for (var i=0; i< answer.length; i++)
    {
        display[i] = "_ ";
        output = output + display[i];
    }
    document.getElementById("game");
    output = "";
}


var submit = function()
{
    output = "";
    userLetter=$("letter").value;
    $("letter").value ="";

    for (var c = 0; c< answer.length; c++)
    {
        alert(letters[c]);
        if (userLetter.toUpperCase()===letter[c])
        {
            display[c] = userLetter.toUpperCase();
            win--;
        }
        output = output + display[c] + " ";
    }

}

document.getElementById("game").innerHTML = output;
output="";
attemptsLeft--;

if (win < 1)
{
    document.getElementById("guess").innerHTML = "You Win !!!";
}
else if (attemptsLeft < 1)
{
    document.getElementById("guess").innerHTML = "You Lose !!";
}
else
{
    document.getElementById("guess").innerHTML = "You have " + attemptsLeft + "guess left";
   }






window.onload = function()
{
    setup();
}