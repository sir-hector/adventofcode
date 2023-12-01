import { readFileSync } from 'fs';
const file = readFileSync('./data.txt', 'utf-8');
const splitted = file.split('\n');
let sum = 0
let sum2 = 0;

const numbersArrays = {
    'one': 'o1ne',
    'two': 'tw2o',
    'three': 'th3ree',
    'four': 4,
    'five': 'fi5ve',
    'six': 6,
    'seven': 'sev7en',
    'eight': 'eig8ht',
    'nine': 'ni9ne',
}


// first
splitted.forEach((line) => {
    const numbers = line.replace(/[^0-9]/g, "");
    if(numbers.length === 1){
        sum += Number(numbers[0] + numbers[0])
    }else {
        sum += Number(numbers[0] + numbers[numbers.length-1])
    }
})



// second
splitted.forEach((line) => {
    Object.keys(numbersArrays).forEach(key => {
        line = line.replace(new RegExp(key, "g"), numbersArrays[key]);
    });
    const numbers = line.replace(/[^0-9]/g, "");
    console.log(numbers)
    if(numbers.length === 1){
        sum2 += Number(numbers[0] + numbers[0])
    }else {
        // sum2 += Number(numbers[0] + numbers[numbers.length-1])
        sum2 += Number(numbers[0] + numbers[numbers.length-1])
    }
})

console.log(sum2)
