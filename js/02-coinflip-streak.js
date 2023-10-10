var coinFlip;
var streak = 0;

do{

    coinFlip = Math.round(Math.random());

    if (coinFlip === 0){
        console.log("Heads");
        streak++;
    }
    else{
        console.log("Tails")
    }


}while(coinFlip !== 1)

console.log(`The amount of times Heads was in a row ${streak}`);