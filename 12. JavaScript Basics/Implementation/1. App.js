

// !Task-1 if, else if & else

// const password = prompt(`Enter Password`);

//*Method-1
// if (password.length >= 6) {
//   if (password.indexOf(" ") === -1) {
//     console.log(`Valid Password !!`);
//   } else {
//     console.log(`Password cannot contain space!!  `);
//   }
// } else {
//   console.log(`Password is too short !! Must be 6+`);
// }

//*Method-2
// if (password.length >= 6 && password.indexOf(` `) === -1) {
//   console.log(`Congratulations!!`);
// } else {
//   console.log(`Enter the right Password !!`);
// }


//*Method-2
// password.length >= 6 && password.indexOf(` `) === -1
//   ? console.log(`Valid Password`)
//   : console.log(`Invalid Password`);


// !Task-2 if-else


// let naam = `adnan`;
// if (naam[0] !== naam[0].toUpperCase())
// {
//   let cap = naam[0].toUpperCase();
//   naam = naam.slice(1);
//   console.log(`Sucessfully Changed to Upper-case !! ${cap+naam} `);
// }

//! Task-3 Arrays
// const leaderboard = ['Harry', 'Lua', 'Hermione', 'Bellatrix']; 
// leaderboard[1] = `Luna`;
// leaderboard[3] = `Darco`;
// console.log(leaderboard);


//! Task-4 Push, Pop, Shift and Unshift

/* const personNames = [`Adeel`,`Adnan`, `Arslan`, `Fahad`, `Nafees`];
console.log(personNames);
personNames.push(`Noman`,`Zain`);
console.log(personNames);
let lastPerson = personNames.pop();
console.log(lastPerson);
console.log(personNames); */


 //? Shift & Unshift

/* let firstPerson = personNames.shift();
console.log(firstPerson);
console.log(personNames);
personNames.unshift(`Adeel`);
console.log(personNames); */


// ! Coding Exercise

/* const planets = ['The Moon', 'Venus', 'Earth', 'Mars', 'Jupiter'];
planets.shift();
planets.push(`Saturn`);
planets.unshift(`Mercury`);
console.log(planets); */

// ! More Array Methods

/* //? Concat
const firstName = [`Adnan`];
const lastName = [`Naeem`]
const fullName = firstName.concat(lastName);
console.log(`Concat: ${fullName}`);

//? Includes
console.log(`Includes: ${fullName.includes(`Adnan`)}`);

//? IndexOf
console.log(`IndexOf: ${fullName.indexOf(`Naeem`)}`);

//? Join
let pName = fullName.join();
console.log(`Join: ${pName}`);

//? Reverse
console.log(`Reverse: ${fullName.reverse()}`);
fullName.reverse();

//? Slice (Copy array)
const copyArray = fullName.slice();
console.log(`Slice: ${copyArray}`);


//? Splice (replace or remove in array)
fullName.unshift(`M`);
console.log(`Splice: (removed)--> ${fullName.splice(1, 1)}`);  //Deleting 2nd element
console.log(`New Array: ${fullName} `);
fullName.splice(1, 0, `Adnan`);
console.log(`Splice: ${fullName}`);


//? Sort
fullName.push(`A`);
console.log(`Sort: ${fullName.sort()}`);
 */

//! 2d Arrays (Nested Arrays)

/* const gameBoard = [
  [0, null, `X`],
  [null, `X`, 0],
  [`X`, 0, null]
];

console.log(gameBoard);
console.log(gameBoard[1][1]); */

//! Coding Exercise of Nested Arrays

/* const airplaneSeats = [
    ['Ruth', 'Anthony', 'Stevie'],
    ['Amelia', 'Pedro', 'Maya'],
    ['Xavier', 'Ananya', 'Luis'],
    ['Luke', null, 'Deniz'],
    ['Rin', 'Sakura', 'Francisco']
];

airplaneSeats[3][1] = `Hugo`;
console.log(airplaneSeats[3][1]);
console.log(airplaneSeats); */

//! Object Literals 
/* 
const product = {
  name: `Gummy Bears`,
  inStock: true,
  price: 1.99,
  flavours: [`grape`,`apple`,`cherry`]
}

product.price = 20;
product.color = `red`;
console.log(product); */



//! Coding Exercise Object Literals

/* const restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206',
}

let fullAddress = `${restaurant.address}, ${restaurant.city}, ${restaurant.state}, ${restaurant.zipcode} `;
console.log(fullAddress); */


// ! Object Literals inside Arrays

/* const userPosts = [
  {username: `madnannaeem`, text:`nice`, votes: 9},
  {username: `arslannaeem`, text:`average`, votes: 6},
  {username: `mfahad`, text:`good`, votes: 7}
]

console.log(userPosts); */

//! For Loops

// ! Coding Exercise

/* for (let i = 1; i <= 6; i++)
{
  console.log(`Da ba dee da ba daa`)
} */

//? Even Numbers

/* for (let num = 2; num <= 21; num+=2)
{
  console.log(num);
  } */

  //? From 100 - 0
  
// for (let num = 100; num >= 0; num--)
// {
//   console.log(num);
// }
  
// ? Decremental Loop

/* for (let num = 25; num >= 0; num -= 5)
{
  console.log(num);
} */

// ? Array Loop Exercise

/* const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];
for (let i = 0; i <= people.length; i++){

  console.log(people[i].toUpperCase());
}
 */

// ? Nested Loops

