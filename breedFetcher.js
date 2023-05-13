const request = require('request');

const breed = process.argv[2];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

const fetchBreedDescription = function(breedName, callback) {
  request(url, (error, response, body) => {

    if (error) {
      return callback("Request error: ", error);
    } else {
      const data = JSON.parse(body);
      if (data.length === 0) {
        return callback("Cat breed not found, sorry!");
      } else {
        return callback(data[0].description);
      }
    }

  });
};