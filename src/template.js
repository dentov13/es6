function greet(name) {
  console.log(`Hello, ${name}`.toUpperCase());
}
greet('Joe');
// -------------------------
function createEmail(to, from, subj, message) {
  console.log(`
    To: ${to}
    From: ${from}
    Subject: ${subj}
    Message: ${message}
  `);
}
createEmail('john@mail.com', 'jane@mail.com', 'hello', 'how r u ?');
// -------------------------
function add(x, y) {
    console.log(`${x} + ${y} = ${parseInt(x) + parseInt(y)}`);
}
add('5','13');
// -------------------------
let name = 'Neil';
console.log(upperName`Hello, ${name}`);

function upperName(literals, value) {
  return literals[0] + value.toUpperCase();
}
