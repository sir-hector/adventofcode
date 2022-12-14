import { readFileSync } from "fs";
import { number } from "prop-types";

const file = readFileSync("./data.txt", "utf-8");


for(let i=0; i <file.length -13; i++){
    if(!checkIfIsMarker(getPartsOfString(i))){
        console.log(i+14)
        console.log(getPartsOfString(i))
        break;
    }
}

function getPartsOfString(number: number) {
    return (file.substring(number, number+14))
}

function checkIfIsMarker (marker: string) {
    let check = false;

    (marker.split('')).forEach((letter,index) => {
        if(marker.indexOf(letter) !== marker.lastIndexOf(letter)) {
            check = true
        }
    })

    return check
}