import { readFileSync } from "fs";
import { number } from "prop-types";

const file = readFileSync("./data.txt", "utf-8");

const splitted = file.split("\n");

const map = {
    1: ["R", "P", "C", "D", "B", "G"],
    2: ["H", "V", "G"],
    3: ["N", "S", "Q", "D", "J", "P", "M"],
    4: ["P", "S", "L", "G", "D", "C", "N", "M"],
    5: ["J", "B", "N", "C", "P", "F", "L", "S"],
    6: ["Q", "B", "D", "Z", "V", "G", "T", "S"],
    7: ["V", "Z", "M", "H", "F", "T", "Q"],
    8: ["C", "M", "D", "B", "F"],
    9: ["F", "C", "Q", "G"],
  };

splitted.forEach((el) => {
    const numbers = getValuesFromString(el)
    moveUpgrade(numbers)
});

function getValuesFromString(value: string){
    const NUMERIC_REGEXP = /[-]{0,1}[\d]*[.]{0,1}[\d]+/g;
    const values = value.match(NUMERIC_REGEXP);
    return values
}


function move(numbers) {
    const loopIterator = numbers[0]
    const from = numbers[1]
    const to = numbers[2]

    for(let i = 0; i < loopIterator ; i++){
        map[to].push(map[from].pop())
    }
}

function moveUpgrade(numbers) {
    const loopIterator = numbers[0]
    const from = numbers[1]
    const to = numbers[2]
    const temporaryarray: string[] = []

    for(let i = 0; i < loopIterator ; i++){
        temporaryarray.push(map[from].pop())
    }

    while(temporaryarray.length){
        map[to].push(temporaryarray.pop())
    }
}


console.log(map)