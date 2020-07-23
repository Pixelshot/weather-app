const request = require('postman-request');

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=bcace1629cf7d9dcc7e8a266921f0a23&query=${longitude},${latitude}`;
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback('Unable to communicate with API');
    } else if (response.body.error) {
      callback('Error in search. Please try again');
    } else {
      const temp = response.body.current.temperature;
      const feelslike = response.body.current.feelslike;
      const location = response.body.location.name;

      callback(
        `It is currently ${temp}°C here in ${location} but it sure feels like ${feelslike}°C`
      );
    }
  });
};

module.exports = forecast;
