var coinFlip;
var userPrompt = parseInt(prompt("How many times do you want to flip a coin?"));

for(var i = 0; i < userPrompt; i++){
    coinFlip = Math.round(Math.random());

    if (coinFlip === 0){
        console.log("Heads");
    }
    else{
        console.log("Tails")
    }
}