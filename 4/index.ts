import { readFileSync } from "fs";
import { number } from "prop-types";

const file = readFileSync("./data.txt", "utf-8");

const splitted = file.split("\n");
let result = 0;

splitted.forEach(element => {
   if(checkPairs(element)){
     result++
   }
})

console.log(result)

function checkPairs(element){
    const parts = element.split(',');
    const splittedFirst: number[] = parts[0].split('-')
    const splittedSecond: number[] = parts[1].split('-')


    if((Number(splittedFirst[0]) >= Number(splittedSecond[0])) && Number((splittedFirst[1]) <= Number(splittedSecond[1])))
    {
        console.log(`A ${splittedFirst[0]} - ${splittedFirst[1]} w ${splittedSecond[0]} ${splittedSecond[1]}`)
        return true
    } 
    if((Number(splittedSecond[0]) >= Number(splittedFirst[0])) && Number((splittedSecond[1]) <= Number(splittedFirst[1]))){
        console.log(`B ${splittedFirst[0]} - ${splittedFirst[1]} w ${splittedSecond[0]} ${splittedSecond[1]}`)
        return true
    } 
    return false
}