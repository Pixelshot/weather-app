const request = require("postman-request");

const url =
  "http://api.weatherstack.com/current?access_key=bcace1629cf7d9dcc7e8a266921f0a23&query=Selangor";

request({ url: url, json: true }, (error, response) => {
  const temp = response.body.current.temperature;
  const feelslike = response.body.current.feelslike;

  console.log(`It is currently ${temp}. It feels like ${feelslike}`);
});

// Geocoding Challenge:
// 1. Fire off a new request to the URL explored in browser
// 2. Have the request module parse it as JSON
// 3. Print both the latitude and longtitude to the terminal
// 4. Test work

const geolocationURL =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Kuala%20Lumpur.json?access_token=pk.eyJ1IjoicGl4ZWxzaG90IiwiYSI6ImNrY3ZyamxpdDA3MHQycm13dHRicmhkaGoifQ.3fG1IKXmj3BFBhShgxe_3Q&limit=1";

request({ url: geolocationURL, json: true }, (error, response) => {
  const features = response.body.features[0];
  const latitude = features.center[1];
  const longitude = features.center[0];

  console.log(`Current search latitude: ${latitude}, longitude: ${longitude}`);
});
