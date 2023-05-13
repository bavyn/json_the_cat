const request = require('request');

const breed = 'siberian';
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;


request(url, (err, response, body) => {
  console.log(typeof body);
  const data = JSON.parse(body);
  console.log(data[0].description);
  console.log(typeof data);

});