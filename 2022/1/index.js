"use strict";
// This list represents the Calories of the food carried by five Elves:
exports.__esModule = true;
// The first Elf is carrying food with 1000, 2000, and 3000 Calories, a total of 6000 Calories.
// The second Elf is carrying one food item with 4000 Calories.
// The third Elf is carrying food with 5000 and 6000 Calories, a total of 11000 Calories.
// The fourth Elf is carrying food with 7000, 8000, and 9000 Calories, a total of 24000 Calories.
// The fifth Elf is carrying one food item with 10000 Calories.
// In case the Elves get hungry and need extra snacks, they need to know which Elf to ask: they'd like to know how many Calories are being carried by the Elf carrying the most Calories. In the example above, this is 24000 (carried by the fourth Elf).
// Find the Elf carrying the most Calories. How many total Calories is that Elf carrying?
var fs_1 = require("fs");
var file = (0, fs_1.readFileSync)('./data.txt', 'utf-8');
var splitted = file.split('\n');
var sumOfCalories = [];
var sum = 0;
splitted.forEach(function (value) {
    if (value !== '') {
        sum = sum + parseInt(value);
    }
    if (value == '') {
        sumOfCalories.push(sum);
        sum = 0;
    }
});
console.log('TOP OF THE ELF');
console.log(sumOfCalories.reduce(function (prev, current) {
    return (prev > current) ? prev : current;
}));
function compareNumbers(a, b) {
    return a - b;
}
var sortedArray = sumOfCalories.sort(compareNumbers);
var sumOfThree = 0;
for (var i = sortedArray.length - 1; i > sortedArray.length - 4; i--) {
    sumOfThree += sortedArray[i];
}
console.log(sumOfThree);
