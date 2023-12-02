"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var file = (0, fs_1.readFileSync)('./data.txt', 'utf-8');
var splitted = file.split('\n');
var possibleCubes = {
    'red': 12,
    'blue': 14,
    'green': 13
};
var sum = 0;
var sum2 = 0;
// first 
splitted.forEach(function (line) {
    // get game number
    var parts = line.split(':');
    var gameString = parts[0];
    var cubesString = parts[1];
    var gameBreak = false;
    var singleCubes = cubesString.split(",").join(';').split(';');
    singleCubes.forEach(function (cube) {
        var values = cube.split(' ');
        var number = values[1];
        var color = values[2];
        if (number > possibleCubes[color]) {
            gameBreak = true;
        }
    });
    if (!gameBreak) {
        sum = sum + Number(gameString.split(' ')[1]);
    }
});
// console.log(sum)
// second 
var multiplyValues = function (obj) {
    return Object.values(obj).reduce(function (accumulator, currentValue) {
        return accumulator * currentValue;
    }, 1); // Start the accumulator with 1
};
splitted.forEach(function (line) {
    // get game number
    var parts = line.split(':');
    // const gameString = parts[0];
    var cubesString = parts[1];
    var linesCubes = {
        'red': 1,
        'blue': 1,
        'green': 1
    };
    var singleCubes = cubesString.split(",").join(';').split(';');
    singleCubes.forEach(function (cube) {
        var values = cube.split(' ');
        var number = values[1];
        var color = values[2];
        if (number > linesCubes[color]) {
            linesCubes[color] = Number(number);
        }
    });
    var result = multiplyValues(linesCubes);
    console.log(result);
    console.log(linesCubes);
    sum2 = sum2 + result;
});
console.log(sum2);
