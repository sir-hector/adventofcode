"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var file = (0, fs_1.readFileSync)('./data.txt', 'utf-8');
var splitted = file.split('\n');
var sum = 0;
var sum2 = 0;
var numbersArrays = {
    'one': 'o1ne',
    'two': 'tw2o',
    'three': 'th3ree',
    'four': 4,
    'five': 'fi5ve',
    'six': 6,
    'seven': 'sev7en',
    'eight': 'eig8ht',
    'nine': 'ni9ne'
};
// first
// splitted.forEach((line) => {
//     const numbers = line.replace(/[^0-9]/g, "");
//     if(numbers.length === 1){
//         sum += Number(numbers[0] + numbers[0])
//     }else {
//         sum += Number(numbers[0] + numbers[numbers.length-1])
//     }
// })
// second
splitted.forEach(function (line) {
    Object.keys(numbersArrays).forEach(function (key) {
        line = line.replace(new RegExp(key, "g"), numbersArrays[key]);
    });
    var numbers = line.replace(/[^0-9]/g, "");
    console.log(numbers);
    if (numbers.length === 1) {
        sum += Number(numbers[0] + numbers[0]);
    }
    else {
        // sum2 += Number(numbers[0] + numbers[numbers.length-1])
        sum += Number(numbers[0] + numbers[numbers.length - 1]);
    }
});
console.log(sum);
