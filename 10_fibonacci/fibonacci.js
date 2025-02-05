const fibonacci = function(number) {

    number = Number(number);
    if (number === 0) return 0;
    if (number < 0) return "OOPS";

    let fibonacci = [1, 1];

    for (let i = 2; i < number; i++) {
        fibonacci.push(fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]);
    }

    // console.log(`Sequence is ${fibonacci}.`);
    return fibonacci[number - 1];

};

// Do not edit below this line
module.exports = fibonacci;
