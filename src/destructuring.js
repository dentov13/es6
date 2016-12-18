// let [js, php, py,rb] = ['JS', 'PHP', 'Python', 'Ruby'];
// console.log(js, php, py, rb);

// let scores = [3, 4, 5];
// let [low, ...rest] = scores;
// console.log(low, rest);

// let scores = [3, 4];
// let [low, mid, high = 5] = scores;
// console.log(low, mid, high);

// let scores = [3, 4, [5,6]];
// let [low, mid, [high, higher]] = scores;
// console.log(low, mid, high, higher);

function computeScore([low, mid]) {
  console.log(low, mid);
}
computeScore([3, 4]);

function getScores() {
  return [3,4,5];
}
let scores = getScores();
console.log(scores);
let [low, mid, high] = getScores();
console.log(low, mid, high);

let yes = "y";
let no = "n";

[yes, no] = [no, yes];
console.log("Yes", yes);
console.log("No", no);
