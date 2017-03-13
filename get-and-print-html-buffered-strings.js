// import our https module  from nodjs
let https = require('https');

function getAndPrintHTML () {

  const REQUEST_OPTIONS = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  /* Add your code here */
  let chunkCount = 0;
  let dataString = '';

  https.get(REQUEST_OPTIONS, (response) => {
    // Set the encoding to read the data with the unicode format utf8 which is the encoding for the web default
    response.setEncoding('utf8');

    // When we hear the event 'data' emitted do our arrow function callback
    response.on('data', (chunk) => {
      chunkCount += 1;
      dataString += chunk;
    });

    response.on('end', () => {
      console.log(dataString);
      console.log(`There were ${chunkCount} chunks received.`);
      console.log('The string is the best buffer as that is what all HTML transmits in.')
    });

    response.on('error', (err) => {
      console.log(`Error: ${err}`);
    });
  });
}

getAndPrintHTML();