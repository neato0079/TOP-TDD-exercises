const findTheOldest = function(arrayOfPeople) {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    let oldest = 0
    let age = 0
    //find the oldest age
    for(let person of arrayOfPeople){
        if(!(person.yearOfDeath)){
            age = currentYear - person.yearOfBirth;
        }else {
            age = person.yearOfDeath - person.yearOfBirth;
        }
        if(oldest < age){
            oldest = age;
        }
    }
    //find which person has the oldest age
    for(let person of arrayOfPeople){
        if(!(person.yearOfDeath)){
            age = currentYear - person.yearOfBirth;
        }else {
            age = person.yearOfDeath - person.yearOfBirth;
        }
        if(oldest === age){
            return person
        }
    }
};

// Do not edit below this line
module.exports = findTheOldest;
