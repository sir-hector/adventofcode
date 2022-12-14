"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var file = (0, fs_1.readFileSync)("./data.txt", "utf-8");
for (var i = 0; i < file.length - 13; i++) {
    if (!checkIfIsMarker(getPartsOfString(i))) {
        console.log(i + 14);
        console.log(getPartsOfString(i));
        break;
    }
}
function getPartsOfString(number) {
    return (file.substring(number, number + 14));
}
function checkIfIsMarker(marker) {
    var check = false;
    (marker.split('')).forEach(function (letter, index) {
        if (marker.indexOf(letter) !== marker.lastIndexOf(letter)) {
            check = true;
        }
    });
    return check;
}
