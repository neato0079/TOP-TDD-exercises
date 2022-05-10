const sumAll = function(num1, num2) {
    let sum = 0;
    let smallNum = num1;
    let largeNum = num2;

    if(typeof num1 != 'number' || typeof num2 != 'number' || num1 < 0 || num2 < 0){
        return 'ERROR'
    }

    //in case larger number comes first
    if(num1 > num2){
        smallNum = num2;
        largeNum = num1;
    }
    
    //use a traditional for loop and i to smallNum and the length part of the loop to largeNum
    //add i to sum
    for(i = smallNum; i <= largeNum; i++){
        sum += i;
    }

    return sum;
};


// Do not edit below this line
module.exports = sumAll;
