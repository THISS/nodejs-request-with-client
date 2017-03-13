// import the https module from nodejs
let https = require('https');

// Create a function that makes a request to the web and prints the results
function getAndPrintHTMLChunks() {
  const REQUEST_OPTIONS = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  let chunkCount = 0;

  https.get(REQUEST_OPTIONS, (response) => {
    // Set the encoding to read the data with the unicode format utf8 which is the encoding for the web default
    response.setEncoding('utf8');

    // When we hear the event 'data' emitted do our arrow function callback
    response.on('data', (chunk) => {
      chunkCount += 1;
      console.log(chunk + '\r\n');
    });

    response.on('end', () => {
      console.log(`There were ${chunkCount} chunks received.`);
    });

    response.on('error', (err) => {
      console.log(`Error: ${err}`);
    });
  });

}

getAndPrintHTMLChunks();