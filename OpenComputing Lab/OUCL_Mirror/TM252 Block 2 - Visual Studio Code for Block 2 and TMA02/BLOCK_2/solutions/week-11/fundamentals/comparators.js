let diameter = 40.3;

if (diameter >= 25.6) {
    console.log("I'm a boulder!");
} else {
    console.log("I'm a pebble!");
}

let number_three = 3;
let text_three = "3";

console.log(number_three == text_three);
console.log(number_three === text_three);

let c = 342523543;
if (c >= 299792458) {
    console.log("You can't go that fast!");
}

let password = "secure";
if (password === "123456") {
    console.log("That's my password");
}

let aNumber = 4;
if (aNumber > 0) {
    console.log("Positive");
} else {
    if (aNumber < 0) {
        console.log("Negative");
    } else {
        console.log("Zero");
    }
}
