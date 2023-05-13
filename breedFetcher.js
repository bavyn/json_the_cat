const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response, body) => {

    if (error) {
      callback(`Request error: ${error}`, null);
    } else {
      const data = JSON.parse(body);
      if (data.length === 0) {
        callback("Cat breed not found, sorry!");
      } else {
        callback(null, data[0].description);
      }
    }

  });
};

module.exports = { fetchBreedDescription };