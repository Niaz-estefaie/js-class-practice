const x = 1;
x = -x;
console.log(x); // output: -1

let a = 1, b = 3;
console.log(b - a); // output: 2

console.log(5 % 2); // output: 1
console.log(5 % 3); // output: 2

console.log(2 ** 2); // output: 2² = 4

const string = "my" + "string";
console.log(s); // output: mystring
const mixedString = `This is ${string} and I know it !`;
console.log(mixedString); // output: This is mystring and I know it !

console.log(1 + "2"); // output: 12

console.log(2 + 2 + "2"); // output: 42

console.log(6 - "2"); // output: 4, converts '2' to a number
console.log("6" / "2"); // output: 3, converts both operands to numbers

let y = "-2";
console.log(+y); // output: -2

// ********************************************************************* //

a = 1;
b = 2;

let c = 3 - (a = b + 1);

console.log(a); // output: 3
console.log(c); // output: 0

a = b = c = 2 + 2;

console.log(a); // 4
console.log(b); // 4
console.log(c); // 4

let counter = 10;
counter++;
console.log(counter); // output: 11
