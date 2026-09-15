function math(a, op, b) {
    console.log(a, b);
    console.log(op(a, b));
}

let add = function(a, b) { return a + b; }
let mult = function(a, b) { return a * b; }

math(1, add, 2);
math(1, mult, 2);
