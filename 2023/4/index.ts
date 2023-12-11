import {readFileSync} from 'fs'

const file = readFileSync('./data.txt', 'utf-8');
const splitted = file.split('\n');
let sum = 0;

splitted.forEach(line => {
    // extract numbers 
    const parts = line.split(':')

    // number parts
    const numbersPart = parts[1].split('|')

    //
    const winningNumbers = numbersPart[0].split(' ').filter(el => el.trim() !== '' && !isNaN(Number(el.trim())));
    const myNumbers = numbersPart[1].split(' ').filter(el => el.trim() !== '' && !isNaN(Number(el.trim())));
    let pars = -1;

    myNumbers.forEach(el => {
        if(winningNumbers.indexOf(el) > -1) {
            pars++
        }
    })

    if(pars != -1) {
        sum += Math.pow(2,pars)
    }
})

console.log(sum)