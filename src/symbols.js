// let symbol = Symbol.for('name');
// let name = Symbol.keyFor(symbol)
// console.log(name);

// let user = {
//   username: 'r2d2',
//   [Symbol('password')]: 'c3po',
//   password: 'abc'
// }
//
// let password = user[Symbol.for('password')];
// console.log(password);
//
// console.log(Object.getOwnPropertySymbols(user));

let obj = {
  iterator: 0,
  [Symbol.iterator]() {}
}
