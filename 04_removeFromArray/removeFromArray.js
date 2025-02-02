const removeFromArray = function(inputArray, ...arrayWithItemsToRemove) {


    // Versjon med for loops i to dimensjoner.

    // console.log(`--- \ninputArray is ${inputArray}, and array with values to remove is ${arrayWithItemsToRemove}`);
    // for (let i = 0; i < inputArray.length; i++) {
    //     let item = inputArray[i];
    //     console.log(`--- \nNow checking ${item} against ${arrayWithItemsToRemove}. Index is now ${i}`);

    //     for (let j = 0; j < arrayWithItemsToRemove.length; j++) {
    //         let itemToRemove = arrayWithItemsToRemove[j];
    //         console.log(`\t Checking if ${item} matches ${itemToRemove}`);
    //         if (item === itemToRemove) {
    //             console.log(`\t\t  Found ${item} to match ${itemToRemove}, so splicing index ${i}.`);
    //             inputArray.splice(i, 1);
    //             i = i - 1;
    //             console.log(`\t\t  Since array is spliced, we move the i one step back. i is now ${i}`);
    //             console.log(`\t\t  inputArray is currently ${inputArray}`);
    //         } else {
    //             console.log(`\t\t  No match for ${item} against ${itemToRemove}.`);
    //         }
    //     }

    // }
    // console.log(`--- \nResulting array is ${inputArray}`);
    // return inputArray;

    // Versjon med .includes
    // let resultingArray = [];
    // inputArray.forEach(item => {
    //     if(!arrayWithItemsToRemove.includes(item)) {
    //         resultingArray.push(item);
    //     }
    // });
    // return resultingArray;
    

    // Versjon med .filter

    // This works
    // return inputArray.filter(item => !arrayWithItemsToRemove.includes(item));

    // This works not
    return inputArray.filter(item => {
        return !arrayWithItemsToRemove.includes(item); // hvis funksjonen er innen {} så må vi si hva som skal returneres, i forhold til eksemplet over hvor shorthanden returnerer den eneste expression.
    });

};

// Do not edit below this line
module.exports = removeFromArray;