"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var obj = _defineProperty({
  iterator: 0
}, Symbol.iterator, function () {});