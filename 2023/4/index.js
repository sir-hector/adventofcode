"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var file = (0, fs_1.readFileSync)('./data.txt', 'utf-8');
var splitted = file.split('\n');
var sum = 0;
splitted.forEach(function (line) {
    // extract numbers 
    var parts = line.split(':');
    // number parts
    var numbersPart = parts[1].split('|');
    //
    var winningNumbers = numbersPart[0].split(' ').filter(function (el) { return el.trim() !== '' && !isNaN(Number(el.trim())); });
    var myNumbers = numbersPart[1].split(' ').filter(function (el) { return el.trim() !== '' && !isNaN(Number(el.trim())); });
    var pars = -1;
    myNumbers.forEach(function (el) {
        if (winningNumbers.indexOf(el) > -1) {
            pars++;
        }
    });
    if (pars != -1) {
        sum += Math.pow(2, pars);
    }
});
console.log(sum);
