const findTheOldest = function(array) {
    const currentYear = new Date().getFullYear();

    array.forEach(person => {
        if (person.yearOfDeath === undefined) {
            person.yearOfDeath = currentYear;
        }
    });

    const oldestPerson = array.sort(
        (personA, personB) => (personB.yearOfDeath - personB.yearOfBirth) - 
        (personA.yearOfDeath - personA.yearOfBirth));
    return oldestPerson[0];
};


// Do not edit below this line
module.exports = findTheOldest;
