'use strict';

import {fillGameField} from "./letterBox/letterBox.js";
import {createLetterBox} from "./wordBox/wordBox.js";

export function getLettersOfLetterBox() {
    const letterBoxItems = fillGameField().childNodes;

    let letterTextContent = [];
    for (let currentItemLetterBox of letterBoxItems) {
        letterTextContent.push(currentItemLetterBox);
        currentItemLetterBox++;
    }
    return letterTextContent;
}

export function getLettersOfTheWord() {
    const wordLetters = createLetterBox().childNodes;

    let wordLetterTextContent = [];
    for (let currentItemWordBox of wordLetters) {
        if (currentItemWordBox.nodeType === Node.ELEMENT_NODE) {
            wordLetterTextContent.push(currentItemWordBox.childNodes[1]);
            currentItemWordBox++;
        }
    }
    return wordLetterTextContent;
}
