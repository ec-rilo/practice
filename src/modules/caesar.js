// The goal is to submit text and have it become caesar ciphered.
function lowerCaseFilter(letter) {
  if (letter.charCodeAt(0) >= 123) {
    return String.fromCharCode(letter.charCodeAt(0) - 26);
  } else return letter;
}

function upperCaseFilter(letter) {
  if (letter.charCodeAt(0) >= 91) {
    return String.fromCharCode(letter.charCodeAt(0) - 26);
  } else return letter;
}

function filterValue(letter) {
  if (letter === letter.toUpperCase()) {
    return upperCaseFilter(letter);
  } else if (letter === letter.toLowerCase()) {
    return lowerCaseFilter(letter);
  }
}

function encrypt(word, shift) {
  word.forEach((letter, index) => {
    if (letter.toLowerCase() !== letter.toUpperCase()) {
      letter = String.fromCharCode(letter.charCodeAt(0) + shift);

      word[index] = filterValue(letter);
    }
  });

  return word.join('');
}

function caesar(word, shift) {
  // Have the word become caesar ciphered.
  return encrypt(word.split(''), shift);
}

module.exports = caesar;
