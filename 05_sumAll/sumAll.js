const sumAll = function(num1, num2) {
    let sum = 0;
    let smallNum = num1;
    let largeNum = num2;
    if(num1 > num2){
        smallNum = num2;
        largeNum = num1;
    }
    
    //use a traditional for loop and i to num1 and the length part of the loop to num2
    //add i to sum
    for(i = smallNum; i <= largeNum; i++){
        sum += i;
    }

    return sum;
};

console.log(sumAll(4,1))

// Do not edit below this line
module.exports = sumAll;
