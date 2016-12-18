"use strict";

function applyForVisa(documents) {
  console.log("Wait plz ..");
  var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      Math.random() > .5 ? resolve({}) : reject('Go away !');
    }, 2000);
  });
  return promise;
}

function getVisa(visa) {
  console.info("Visa yours!");
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      return resolve(visa);
    }, 2000);
  });
}

function bookHotel(visa) {
  console.info('Hotel - booked');
  return Promise.resolve(visa);
}

function buyTickets(booking) {
  console.info('Tickets - bought');
  console.log('Book', booking);
}

applyForVisa({}).then(getVisa).then(bookHotel).then(buyTickets).catch(function (error) {
  return console.error(error);
});