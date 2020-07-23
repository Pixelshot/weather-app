const request = require('postman-request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

// const url =
//   'http://api.weatherstack.com/current?access_key=bcace1629cf7d9dcc7e8a266921f0a23&query=Selangor';

// request({ url: url, json: true }, (error, response) => {
//   const temp = response.body.current.temperature;
//   const feelslike = response.body.current.feelslike;

//   console.log(`It is currently ${temp}°C. It feels like ${feelslike}°C`);
// });

// geocode('Kuala Lumpur', (error, data) => {
//   console.log('Error', error);
//   console.log('data', data);
// });

forecast(101.62, 3.15, (response, error) => {
  error ? console.log(error) : console.log(`${response}`);
});
