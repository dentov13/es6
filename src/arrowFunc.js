let add = (x,y) => x + y;

let square = x => x * x;

let giveMeAnswer = () => 42;

let log = () => console.log("Logging");

let multiply = (x,y) => {
  let result = x * y;
  return result;
};

let getPerson = () => ({ name: 'Joe' });

(() => console.log('IIFE'))();

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;

numbers.forEach(num => sum += num);
console.log(sum);

let squared = numbers.map(n => n * n);
console.log(squared);

let person = {
  name: 'Bob',
  greet: function() {
    setTimeout(() => {
      console.log(`Hello, my name is ${this.name}`);
      console.log(this);
    }, 2000);
  }
};

person.greet();
// console.log(add(2, 14));
// console.log(square(3));
// console.log(giveMeAnswer());
// log();
// console.log(multiply(5, 7));
// console.log(getPerson());
