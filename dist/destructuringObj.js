'use strict';

var user = {
  firstname: 'Joe',
  lastname: 'Doe',
  social: {
    facebook: 'joedoe',
    twitter: 'jd'
  }
};

var first = user.firstname,
    last = user.lastname,
    fb = user.social.facebook,
    _user$age = user.age,
    age = _user$age === undefined ? 25 : _user$age;
//console.log(first, last, fb, age);

function post(url, _ref) {
  var _ref$data = _ref.data,
      firstname = _ref$data.firstname,
      lastname = _ref$data.lastname,
      cache = _ref.cache;

  console.log(firstname, lastname, cache);
}

var result = post('api/users', { data: user, cache: false });

function getUserInfo() {
  return {
    firstname: 'Joe',
    lastname: 'Doe',
    social: {
      facebook: 'joedoe',
      twitter: 'jd'
    }
  };
}

var _getUserInfo = getUserInfo(),
    firstname = _getUserInfo.firstname,
    lastname = _getUserInfo.lastname,
    twitter = _getUserInfo.social.twitter;

console.log(firstname, lastname, twitter);