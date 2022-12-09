import { readFileSync } from "fs";

const file = readFileSync("./data.txt", "utf-8");

const splitted = file.split("\n");

let result = 0;

splitted.forEach((value) => {
  const opponentChoose = value[0];
  const choose = value[2];

  // A - ROCK
  // B - PAPER
  // C - SCISSORS

  // X - ROCK
  // Y - PAPER
  // Z - scissors

  if (choose == "X") {
    result += 1;
    if (opponentChoose == "A") {
      result += 3;
    } else if (opponentChoose == "C") {
      result += 6;
    }
  } else if (choose == "Y") {
    result += 2;
    if (opponentChoose == "B") {
      result += 3;
    } else if (opponentChoose == "A") {
      result += 6;
    }
  } else if (choose == "Z") {
    result += 3;
    if (opponentChoose == "C") {
      result += 3;
    } else if (opponentChoose == "B") {
      result += 6;
    }
  }
});

console.log(result)