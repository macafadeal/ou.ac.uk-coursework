let scores = [66, 43, 54, 87];
let total = 0;

console.log(scores);

for (let score of scores) {
    total = total + score;
}

console.log(total);
console.log(total / scores.length);
