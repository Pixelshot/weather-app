const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const address = process.argv[2];

if (!address) {
  return console.log('Please enter a valid address');
}

geocode(address, (error, { latitude, longitude, location }) => {
  if (error) {
    return console.log(error);
  }

  forecast(latitude, longitude, (response, error) => {
    if (error) {
      return console.log(error);
    }

    console.log(location);
    console.log(response);
  });
});
