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
// Doesn't work because it deals with one letter at a time
function print1337 (html) {
  let leetMapped = html.split('').map(leetspeak).join('');
  console.log(leetMapped);
}

// Spoke to don and he told me to look into .replace();
// it is faster than doing what I was doing above
function print1337Regex(html) {
  let leetspeak = html.replace(/a/g, '4')
  .replace(/you/g, 'j00')
  .replace(/er/g, '0r')
  .replace(/ck/g, 'x')
  .replace(/e/g, '3')
  .replace(/l/g, '1')
  .replace(/o/g, '0')
  .replace(/s/g, '5')
  .replace(/t/g, '7');

    console.log(leetspeak);
}


getHtml(requestOptions, print1337Regex);