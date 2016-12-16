function greet(greeting = 'Hello', name = 'friend') {
  console.log(`${greeting} ${name}`);
}

greet('Hi', 'Bill');
greet('Hi');
greet(undefined, 'Bill');

function sum(...values) {
  console.log(values.reduce(function (preValue, curValue) {
    return preValue + curValue;
  }));
}

function sum (...values) {
  let sum = 0;

  values.forEach(function (value) {
    sum += value;
  })

  console.log(sum);
}

sum(5, 7, 2, 10);
