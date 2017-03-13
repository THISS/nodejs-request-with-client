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
console.log("it is preferable to have the require('https') in the module that " +
  "is using the functionality so that you don't need to require https it every time you require the functions use");