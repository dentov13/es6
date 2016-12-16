'use strict';

var staticLang = ['C', 'C++', 'Java'];
var dynamicLang = ['JavaScript', 'PHP', 'Ruby'];

var lang = [].concat(staticLang, ['C#'], dynamicLang, ['Python']);

console.log(lang);

function add(x, y, z) {
  console.log(x + y + z);
}

var numbers = [1, 2, 3];

add.apply(undefined, numbers);