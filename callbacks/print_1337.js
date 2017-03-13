// Get our HTML getter
let getHtml = require('../http-functions');

let requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

let dictionary = {a: '4', e: '3', l: '1', o: '0', s: '5', t: '7', 'ck': 'x', 'er': '0r', 'you': 'j00'};

// if the letter is in the dictionary then convert it
function leetspeak(letter) {
  // if(letter in dictionary) {
  //   return dictionary[letter];
  // }
  // return letter;
  return (letter in dictionary)? dictionary[letter] : letter;
}

// Obfuscate with leetspeak
function print1337 (html) {
  let leetMapped = html.split('').map(leetspeak).join('');
  console.log(leetMapped);
}


getHtml(requestOptions, print1337);