const numberCheck = function (numberA) {
    if (numberA > 100) {
        return true;
    }
    return false;
}

const result = numberCheck(101); // return is true > result is true
console.log(result);

const result2 = numberCheck(100); // return is false > result is flase
console.log(result2);

const result3 = numberCheck(99); // return is false > result is false
console.log(result3);

// lines 1-6 is afunction that produces something. In this case a boolean

//----------- bouncer bot Brenda > this is a function that calculates (checks numeric value) and produces return value 

const bouncerBotBrenda = function (personAge, maxNumber, currentNumber) {
    if (personAge < 18) {
        return "this is a club for adults";
    }
    if ((currentNumber + 1) > maxNumber) {          // or: currentNumber === maxNumber
        return "it's too busy now, come back later";
    }
    return "come in";
}

responseBrenda = bouncerBotBrenda(18, 100, 100);
console.log(responseBrenda);

const bouncerBotBrenda2 = function (personAge, maxNumber, currentNumber) {
    if (personAge < 18) {
        return "this is a club for adults";
    }
    if ((currentNumber + 1) > maxNumber) {          // or: currentNumber === maxNumber
        return "it's too busy now, come back later";
    }
    return "come in";
}

responseBrenda2 = bouncerBotBrenda2(17, 100, 50);
console.log(responseBrenda2);

const bouncerBotBrenda3 = function (personAge, maxNumber, currentNumber) {
    if (personAge < 18) {
        return "this is a club for adults";
    }
    if (currentNumber >= maxNumber) {          
        return "it's too busy now, come back later";
    }
    return "come in";
}

responseBrenda3 = bouncerBotBrenda3(18, 100, 99);
console.log(responseBrenda3);

// ---------------------------------------------------- average > function that does something

const calculateAverage = function (numberA, numberB, numberC, numberD, numberE) {
    const average = (numberA + numberB + numberC + numberD + numberE) / 5;    
    return average;
} 

const resultAverage = calculateAverage(5, 8, 10, 11, 7);    // average is 41 / 5 is 8.2
console.log(Math.round(resultAverage));                     // rounded to 8


const calculateAverage2 = function (numbers) {
    const average = numbers.reduce((total, n) => total + n) / numbers.length;
    return Math.round(average);                 // rounded inside function
} 

const resultAverage2 = calculateAverage2([5, 8, 10, 11, 7]); // average is 41 / 5 is 8.2
console.log(resultAverage2);                     // rounded to 8 but now inside function  
