// ! Guessing Game

let maxNumber = parseInt(prompt(`Welcom! Enter your max number: `));
while (!maxNumber) {
  maxNumber = parseInt(prompt(`Enter a valid number: `));
}

const guessNumber = Math.floor(Math.random() * maxNumber) + 1;
console.log(`Target Number: ${guessNumber}`);

let temp = prompt(`Guess the Number :`);
let enterdNum = parseInt(temp);

while (!enterdNum) {
  temp = prompt(`Enter a valid guess: `);
  if (temp == `q`) {
    break;
  } else {
    enterdNum = parseInt(temp);
  }
}

let tries = 1;

if (temp === `q`) {
  console.log(`You have Quit!!`);
} else {
  while (guessNumber !== parseInt(enterdNum)) {
    if (enterdNum > guessNumber) {
      enterdNum = prompt(`Too High !!`);
    } else {
      enterdNum = prompt(`Too Low !!`);
    }
  }

  tries++;
}
if (temp !== "q") {
  console.log(`You have gussed the Number ${enterdNum} in ${tries}`);
}
