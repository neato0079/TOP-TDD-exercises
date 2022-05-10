const repeatString = function(string, num) {
    if(num < 0){
        return 'ERROR'
    }
    return string.repeat(num);
};

repeatString('hey', -3)

// Do not edit below this line
module.exports = repeatString;
