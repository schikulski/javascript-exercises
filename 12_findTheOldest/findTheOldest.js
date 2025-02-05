

const findTheOldest = function(people) {

    return people.reduce((currentOldestPerson, thisPerson) => {


        // Check if first person is alive
        if (!currentOldestPerson.yearOfDeath) {
            currentOldestPerson.yearOfDeath = new Date().getFullYear();
        }

        // Check if person is alive
        if (!thisPerson.yearOfDeath) {
            thisPerson.yearOfDeath = new Date().getFullYear();
        }

        // Find age of current oldest.
        let currentOldestPersonAge = currentOldestPerson.yearOfDeath - currentOldestPerson.yearOfBirth;
        let thisPersonAge = thisPerson.yearOfDeath - thisPerson.yearOfBirth;

        return currentOldestPersonAge > thisPersonAge ? currentOldestPerson : thisPerson;

    });

};

// Do not edit below this line
module.exports = findTheOldest;
