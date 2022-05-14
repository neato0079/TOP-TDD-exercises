const fibonacci = function(num) {
    if(num < 0){
        return 'OOPS'
    }
    let fib = []; // Initialize array!

    fib[0] = 0;
    fib[1] = 1;
    for (i = 2; i <= num; i++) {
        // Next fibonacci number = previous + one before previous
        // Translated to JavaScript:
        fib[i] = fib[i - 2] + fib[i - 1];
    }
        return fib[num];
};
// Do not edit below this line
module.exports = fibonacci;
