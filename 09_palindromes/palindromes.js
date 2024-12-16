const palindromes = function (string) {
    const filteredArray = Array.from(string.toLowerCase()).filter((char) => (char.match(/^[a-z0-9]+$/i)));
    const backwardsArray = filteredArray.slice().reverse();
    if (filteredArray.join("") === backwardsArray.join("")) {
        return true;
    } else {
        return false;
    }
};

palindromes("r3ace3car");

// Do not edit below this line
module.exports = palindromes;
