const GREETING = "Welcome";
let firstName = "YOUR NAME";

const TEXT = GREETING + " " + firstName;

console.log(TEXT);

const A = 3;
const B = 4;

console.log(A + B);

console.log(B - A);  // outputs 1
console.log(A * B);  // outputs 12
console.log(A / B);  // outputs 0.75
const C = 2;
console.log(A % C);  // outputs 1

const YES = true;
const NO = false;

console.log(YES && NO);
console.log(YES || NO);
console.log(!YES);

console.log(YES && YES)  // outputs true
console.log(NO || NO)    // outputs false
console.log(!!YES)       // outputs true

const LABEL = "Box length: ";
const BOX_LENGTH = 34;

console.log(LABEL + BOX_LENGTH);
