const reverseString = function(string) {
    let returnString = "";
    let splitString = string.split("");

    for (let i = splitString.length - 1; i >= 0; i--) {
        returnString += splitString[i];
    }

    return returnString;
};

// Do not edit below this line
module.exports = reverseString;
