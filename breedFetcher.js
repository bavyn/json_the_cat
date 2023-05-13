const request = require('request');

const breed = process.argv[2];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;


request(url, (error, response, body) => {

  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log("Cat breed not found, sorry!");
  } else {
    console.log(data[0].description);
  }
  
});