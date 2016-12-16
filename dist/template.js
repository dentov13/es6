'use strict';

var _templateObject = _taggedTemplateLiteral(['Hello, ', ''], ['Hello, ', '']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function greet(name) {
  console.log(('Hello, ' + name).toUpperCase());
}
greet('Joe');
// -------------------------
function createEmail(to, from, subj, message) {
  console.log('\n    To: ' + to + '\n    From: ' + from + '\n    Subject: ' + subj + '\n    Message: ' + message + '\n  ');
}
createEmail('john@mail.com', 'jane@mail.com', 'hello', 'how r u ?');
// -------------------------
function add(x, y) {
  console.log(x + ' + ' + y + ' = ' + (parseInt(x) + parseInt(y)));
}
add('5', '13');
// -------------------------
var name = 'Neil';
console.log(upperName(_templateObject, name));

function upperName(literals, value) {
  return literals[0] + value.toUpperCase();
}