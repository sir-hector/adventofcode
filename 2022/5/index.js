"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var file = (0, fs_1.readFileSync)("./data.txt", "utf-8");
var splitted = file.split("\n");
var map = {
    1: ["R", "P", "C", "D", "B", "G"],
    2: ["H", "V", "G"],
    3: ["N", "S", "Q", "D", "J", "P", "M"],
    4: ["P", "S", "L", "G", "D", "C", "N", "M"],
    5: ["J", "B", "N", "C", "P", "F", "L", "S"],
    6: ["Q", "B", "D", "Z", "V", "G", "T", "S"],
    7: ["V", "Z", "M", "H", "F", "T", "Q"],
    8: ["C", "M", "D", "B", "F"],
    9: ["F", "C", "Q", "G"]
};
splitted.forEach(function (el) {
    var numbers = getValuesFromString(el);
    moveUpgrade(numbers);
});
function getValuesFromString(value) {
    var NUMERIC_REGEXP = /[-]{0,1}[\d]*[.]{0,1}[\d]+/g;
    var values = value.match(NUMERIC_REGEXP);
    return values;
}
function move(numbers) {
    var loopIterator = numbers[0];
    var from = numbers[1];
    var to = numbers[2];
    for (var i = 0; i < loopIterator; i++) {
        map[to].push(map[from].pop());
    }
}
function moveUpgrade(numbers) {
    var loopIterator = numbers[0];
    var from = numbers[1];
    var to = numbers[2];
    var temporaryarray = [];
    for (var i = 0; i < loopIterator; i++) {
        temporaryarray.push(map[from].pop());
    }
    while (temporaryarray.length) {
        map[to].push(temporaryarray.pop());
    }
}
console.log(map);
