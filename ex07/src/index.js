function randomRangeNumber(minNumber, maxNumber){

    var random = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
    if (random >= minNumber && random <= maxNumber){
        return random;
    }
}

randomRangeNumber(2,9);
console.log(randomRangeNumber(2,9));
module.exports = randomRangeNumber;