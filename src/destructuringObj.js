let user = {
  firstname: 'Joe',
  lastname: 'Doe',
  social: {
    facebook: 'joedoe',
    twitter: 'jd'
  }
};

let {firstname: first, lastname: last, social: { facebook: fb }, age = 25} = user;
//console.log(first, last, fb, age);

function post(url, {data: { firstname, lastname }, cache}) {
  console.log(firstname, lastname, cache);
}

let result = post('api/users', { data: user, cache: false })

function getUserInfo() {
  return {
    firstname: 'Joe',
    lastname: 'Doe',
    social: {
      facebook: 'joedoe',
      twitter: 'jd'
    }
  }
}

let {firstname, lastname, social: {twitter}} = getUserInfo();
console.log(firstname, lastname, twitter);
