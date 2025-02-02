const sumAll = function(startInt, endInt) {

    // Handle ERRORs
    if (startInt < 1 || endInt < 1 || !Number.isInteger(startInt) || !Number.isInteger(endInt)) return "ERROR";
    
    // Swap values
    if (startInt > endInt) [startInt, endInt] = [endInt, startInt];

    let finalSum = 0;

    for (; startInt <= endInt; startInt++) {
        finalSum += startInt;
    }

    return finalSum;

};

// Do not edit below this line
module.exports = sumAll;
