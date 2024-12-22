const fibonacci = function(number) {
    let val = parseInt(number);
    let fib = [1, 1];

    if (val < 0) {
        return "OOPS";
    } else if (val === 0) {
        return 0;
    } else {
        for (let i = 2; i < val; i++) {
            fib.push(fib[i-1] + fib[i-2]);
        }
        return fib[val-1];
    } 
};

// Do not edit below this line
module.exports = fibonacci;
