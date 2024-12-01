const repeatString = function(string, num) {
    let printedString = '';
    if (num < 0) {
        return "ERROR";
    }
    for (let i = 0; i < num; i++) {
        printedString += string;
    }
    return printedString;
};

// Do not edit below this line
module.exports = repeatString;
