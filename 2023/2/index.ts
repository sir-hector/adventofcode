import {readFileSync} from 'fs'

const file = readFileSync('./data.txt', 'utf-8');
const splitted = file.split('\n');

const possibleCubes = {
    'red': 12,
    'blue': 14,
    'green': 13
}

let sum = 0;
let sum2 = 0;



// first 
splitted.forEach(line => {
    // get game number
    const parts: string[] = line.split(':')
    const gameString = parts[0];
    const cubesString = parts[1]
    let gameBreak = false;

    const singleCubes = cubesString.split(",").join(';').split(';')

    singleCubes.forEach(cube => {
        const values = cube.split(' ')
        const number = values[1];
        const color = values[2];

        if(number > possibleCubes[color]){
            gameBreak = true;
        }
    })

    if(!gameBreak){
        sum = sum + Number(gameString.split(' ')[1])
    }
})

// console.log(sum)


// second 

const multiplyValues = (obj: Record<string, number>): number => {
    return Object.values(obj).reduce((accumulator: number, currentValue: number) => {
        return accumulator * currentValue;
    }, 1); // Start the accumulator with 1
};

splitted.forEach(line => {
    // get game number
    const parts: string[] = line.split(':')
    // const gameString = parts[0];
    const cubesString = parts[1]
    const linesCubes = {
        'red': 1,
        'blue': 1,
        'green': 1
    }

    const singleCubes = cubesString.split(",").join(';').split(';')

    singleCubes.forEach(cube => {
        const values = cube.split(' ')
        const number = values[1];
        const color = values[2];


        if(number > linesCubes[color]){
            linesCubes[color] = Number(number)
        }
    })

    const result: number = multiplyValues(linesCubes);
    sum2 = sum2 + result

})

console.log(sum2)

