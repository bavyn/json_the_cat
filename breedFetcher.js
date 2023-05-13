const request = require('request');

const breed = process.argv[2];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;


request(url, (error, response, body) => {
  console.log(typeof body);
  const data = JSON.parse(body);
  console.log(data[0].description);
  console.log(typeof data);

});