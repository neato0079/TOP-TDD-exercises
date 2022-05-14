const findTheOldest = function(arrayOfPeople) {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    let age = 0
    age = arrayOfPeople[0].yearOfBirth - arrayOfPeople[0].yearOfDeath;
};

// Do not edit below this line
module.exports = findTheOldest;
