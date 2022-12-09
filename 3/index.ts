import { readFileSync } from "fs";

const file = readFileSync("./data.txt", "utf-8");

const splitted = file.split("\n");
let result = 0;

splitted.forEach(element => {
    const piority = getPiority(element)
    result += piority;
})

console.log(result)

function getPiority(value: string){
    const letter = getLetter(value)
    console.log(letter)
    if(letter.charCodeAt(0) > 90) {
        return letter.charCodeAt(0) - 97 + 1 
    } else {
        return letter.charCodeAt(0) - 65 + 27
    }

}

function getLetter(value:string){
    const length = value.length
    const firstPart = value.substring(0, length/2)
    const secondPart = value.substring(length/2, length);
    let result = '';
    (firstPart.split('')).forEach(letter => {
        if(secondPart.indexOf(letter) >= 0){
            result = letter
            return 
        }
    })

    return result
}