// Get our HTML getter
let getHtml = require('../http-functions');

let requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

// This function will take a string and return in uppercase
function printUppercase (html) {
  let uppercase = html.toUpperCase();
  console.log(uppercase);
}

getHtml(requestOptions, printUppercase);