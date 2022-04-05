function inverseWhile(){
    var i = 5;
    var fiveNumbers = "";
    while(i >= 0){
        (i ===0)? fiveNumbers += i : fiveNumbers += i +",";
        i--;
    }
    return fiveNumbers;
}

console.log(inverseWhile());
module.exports = inverseWhile;