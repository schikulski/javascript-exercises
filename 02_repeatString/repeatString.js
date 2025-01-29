const repeatString = function(string, numberOfTimes) {
        if (numberOfTimes < 0) {
            return "ERROR";
        }
        let result = "";
        for (let index = 0; index < numberOfTimes; index++) {
            result = result + string;
        }
        return result;
};

// Do not edit below this line
module.exports = repeatString;
