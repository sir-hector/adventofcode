"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var file = (0, fs_1.readFileSync)("./data.txt", "utf-8");
var splitted = file.split("\n");
var result = 0;
splitted.forEach(function (element) {
    if (checkPairs(element)) {
        result++;
    }
});
console.log(result);
function checkPairs(element) {
    var parts = element.split(',');
    var splittedFirst = parts[0].split('-');
    var splittedSecond = parts[1].split('-');
    if ((Number(splittedFirst[0]) >= Number(splittedSecond[0])) && Number((splittedFirst[1]) <= Number(splittedSecond[1]))) {
        console.log("A ".concat(splittedFirst[0], " - ").concat(splittedFirst[1], " w ").concat(splittedSecond[0], " ").concat(splittedSecond[1]));
        return true;
    }
    if ((Number(splittedSecond[0]) >= Number(splittedFirst[0])) && Number((splittedSecond[1]) <= Number(splittedFirst[1]))) {
        console.log("B ".concat(splittedFirst[0], " - ").concat(splittedFirst[1], " w ").concat(splittedSecond[0], " ").concat(splittedSecond[1]));
        return true;
    }
    return false;
}
