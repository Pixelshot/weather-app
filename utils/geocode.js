const request = require('postman-request');

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/encodeURIComponent(${address}).json?access_token=pk.eyJ1IjoicGl4ZWxzaG90IiwiYSI6ImNrY3ZyamxpdDA3MHQycm13dHRicmhkaGoifQ.3fG1IKXmj3BFBhShgxe_3Q&limit=1`;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to geocode API', undefined);
    } else if (response.body.features.length === 0) {
      callback('Unable to find location, try another search.', undefined);
    } else {
      callback(undefined, {
        latitude: response.body.features[0].center[0],
        longitude: response.body.features[0].center[1],
        location: response.body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;