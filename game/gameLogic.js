'use strict';

const letterBoxItems = document.querySelectorAll('.letter');
const wordLetters = document.querySelectorAll('.word-letter');

function getLetterOfLetterBox() {
    let letterTextContent;
    for (let currentItemLetterBox of letterBoxItems) {
        letterTextContent = currentItemLetterBox.textContent;
    }
    return letterTextContent;
}

function getLetterOfTheWord() {
    let wordLetterTextContent;
    for(let letterOfTheWord of wordLetters) {
        wordLetterTextContent = letterOfTheWord.textContent;
    }
    return wordLetterTextContent;
}

/**
 * Letters in the letterBox.js matching with word letters in WordBox.js
 */
function LettersBoxListener() {

}