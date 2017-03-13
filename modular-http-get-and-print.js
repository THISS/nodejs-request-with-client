// import the https module from nodejs
let https = require('https');


function getAndPrintHTML (options) {

  /* Add your code here */
  let dataString = '';

  https.get(options, (response) => {
    // Set the encoding to read the data with the unicode format utf8 which is the encoding for the web default
    response.setEncoding('utf8');

    // When we hear the event 'data' emitted do our arrow function callback
    response.on('data', (chunk) => {
      dataString += chunk;
    });

    response.on('end', () => {
      console.log(dataString);
      console.log('The string is the best buffer as that is what all HTML transmits in.')
    });

    response.on('error', (err) => {
      console.log(`Error: ${err}`);
    });
  });

}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

// Call our function
getAndPrintHTML(requestOptions);