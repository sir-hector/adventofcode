"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var file = (0, fs_1.readFileSync)("./data.txt", "utf-8");
var splitted = file.split("\n");
var result = 0;
splitted.forEach(function (element) {
    var piority = getPiority(element);
    result += piority;
});
console.log(result);
function getPiority(value) {
    var letter = getLetter(value);
    console.log(letter);
    if (letter.charCodeAt(0) > 90) {
        return letter.charCodeAt(0) - 97 + 1;
    }
    else {
        return letter.charCodeAt(0) - 65 + 27;
    }
}
function getLetter(value) {
    var length = value.length;
    var firstPart = value.substring(0, length / 2);
    var secondPart = value.substring(length / 2, length);
    var result = '';
    // console.log(length)
    // console.log(firstPart);
    // console.log(firstPart.length);
    // console.log(secondPart);
    // console.log(secondPart.length);
    (firstPart.split('')).forEach(function (letter) {
        if (secondPart.indexOf(letter) >= 0) {
            result = letter;
            return;
        }
    });
    return result;
}
