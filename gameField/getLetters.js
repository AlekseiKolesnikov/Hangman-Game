'use strict';

const letterBoxItems = document.querySelectorAll('.letter');
const wordLetters = document.querySelectorAll('.word-letter');

export function getLetterOfLetterBox() {
    let letterTextContent;
    for (let currentItemLetterBox of letterBoxItems) {
        letterTextContent = currentItemLetterBox.textContent;
    }
    return letterTextContent;
}

console.log(getLetterOfTheWord());

export function getLetterOfTheWord() {
    let wordLetterTextContent;
    for(let letterOfTheWord of wordLetters) {
        wordLetterTextContent = letterOfTheWord.textContent;
    }
    return wordLetterTextContent;
}
