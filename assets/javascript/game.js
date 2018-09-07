var  randomWordArr = ["beef","chicken","pork","fish"];
var randWord = randomWordArr[Math.floor(Math.random() * randomWordArr.length)];

var s;
var count = 0;
var answerArray = [];

function startUp() 
{
    for (var i =0; i < randWord.length; i++)
    {
        answerArray[i] = "_";
    }

    s = answerArray.join(" ");
    document.getElementById("answer").innerHTML = s;
}

function Letter() {
    var letter = document.getElementById("letter").value;
    if (letter.length > 0) {
        for (var i = 0; i < randWord.length; i++)
        if (randWord[i] === letter) {
            answerArray[i] =letter;
        }
    }
    count++;
    document.getElementById("counter").innerHTML = "No of clicks: " + count;
    document.getElementById("answer").innerHTML = answerArray.join(" ");
}
if(count>10) {
    document.getElementById("stat").innerHTML = "you lose";
}


    







    
