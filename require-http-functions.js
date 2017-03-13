// Get our HTML getter
let getHtml = require('./http-functions');

let requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function printHTML (html) {
  console.log(html);
  console.log("I am in the callback function");
}

getHtml(requestOptions, printHTML);