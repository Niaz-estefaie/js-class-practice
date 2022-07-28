// Scoping: this is for the organizing and accessing VARIABLES

// Lexical Scoping: Scoping is controlled by placement of functions and blocks
// LIKE: When a function declared in another function has access to the all variables declared in parent function

// Scope: Space or environment that a variable declared
// Global (everywhere in the code), Function (like in a method), Block (like in if or while)

// Scope Of A Variable: Region of our code where a certain variable can be accessed

// Global Scope:
// Outside of ANY function or block
// Variables declared in global scope are accessible everywhere

// Function Scope (local scope):
// Variables are accessible only inside functions, NOT outside

// function newFunction(yourBirthdayInYear) {
//     const now = 2022;
//     const userBirthday = now - yourBirthdayInYear;
//     return userBirthday;
// }

// console.log(userBirthday); // ReferenceError

// Block Scope:
// Variables are accessible only inside block (only for let and const)

// if (2) {
//     const name = "Niaz";
//     let age = 26;
//     var sampleName = "Fatemeh";
// }

// console.log(sampleName);

// ******************************************************************************** //

// Examples:
// const myName = "Niaz"; // global variable

// function first() {
//     // scope of the function starts from here
//     const age = 26;
//     if (age >= 15) { // true
//         // Child scope of the first()
//         const decade = 3;
//         var married = false;
//     }
//     // ^
//     // | function and if variables have not access to each other except for married variable
//     // v
//     function second() {
//         // Child scope of the first()
//         // console.log(married);
//         // scope in another scope
//         const job = "developer";
//         // age and name did not declared in this function
//         // *NOTE*: every scope always have access to every scope from all its parent scope
//         console.log(`${myName} is a ${age}-old ${job}`);
//     }
//     second();
// }

// first();

// ******************************************************************************** //

// Call Stacks:

// const a = "Fatemeh";
// first();

// function first() {
//   const b = "Hi !";
//   second();
//   console.log(b);

//   function second() {
//     const c = "Hello !";
//     third();
//     console.log(c);
//   }
// }

// function third() {
//   const d = "Hey !";
//   console.log(d);
//   // console.log(a, b, c, d);
// }

// a, first and third are the global
// order of functions which calls: third() => second() => first

// Class:

class CarInIran { // in pascal case
  constructor(name, year, length) {
    this.name = name;
    this.year = year;
    this.length = length;
  }
}

const pars = new CarInIran('Pars', 2002, 120);
