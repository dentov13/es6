let fName = "Nick",
    lName = "Lee",
    email = "nick.lee@gmail.com";

let Person = {
  fName,
  lName,
  email,
  sayHello() {
    console.log(`Hi, my name is ${fName}`);
  },
  get fullName() {
    return this.fName + ' ' + this.lName;
  },
  set fullName(value) {
    this.fName = value;
  }
};

// Object.defineProperty(Person, 'fullname', {
//   get: function() {
//     return this.fName + " " + this.lName;
//   },
//   set: function(value) {
//     this.fName = value;
//   }
// });

console.log(Person);
// Person.sayHello();
//
//
//
// function createCar(property, value) {
//   return {
//     [property]: value,
//     ['_' + property]: value,
//     [property.toUpperCase()]: value,
//     ['get' + property]() {
//       return this[property];
//     }
//   };
// }
// console.log(createCar('vin', 1));
