const removeFromArray = function(array, ...removeList) {

    let resultArray = [];

    for (const item of array) { // check each item in the array against the exclude list
        for (const itemToRemove of removeList) {
            if (!(item === itemToRemove)) {
                console.log(`Item: ${item} is good. Pushing it to resultArray.`);
                resultArray.push(item);
            } else {
                console.log(`Woops! item: ${item} is in the removeList, so not included.`);
            }
        }
    }

    return resultArray;
};

// Do not edit below this line
module.exports = removeFromArray;
