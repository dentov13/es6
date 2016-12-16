let staticLang = ['C', 'C++', 'Java'];
let dynamicLang = ['JavaScript', 'PHP', 'Ruby'];

let lang = [...staticLang, 'C#', ...dynamicLang, 'Python'];

console.log(lang);

function add(x,y,z) {
  console.log(x+y+z);
}

let numbers = [1,2,3];

add(...numbers);
