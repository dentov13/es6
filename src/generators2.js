function* generator() {
  try {
    yield 13;
    yield [1,2,3];
    yield 16;
  }
  catch(e) {
    console.log(e);
  }

}

let iterator = generator();
console.log(iterator.next());
console.log(iterator.throw(new Error('Error')));
console.log(iterator.next());
