'use strict';

import {fillGameField} from "./letterBox/letterBox.js";

export function getLettersOfLetterBox() {
    const letterBoxItems = fillGameField().childNodes;

    let letterTextContent = [];
    for (let currentItemLetterBox of letterBoxItems) {
        letterTextContent.push(currentItemLetterBox);
    }
    return letterTextContent;
}

export function getLettersOfWordBox(wordLetters) {
    let wordLetterTextContent = [];

    for (let currentItemWordBox of wordLetters) {
        if (currentItemWordBox.nodeType === Node.ELEMENT_NODE) {
            wordLetterTextContent.push(currentItemWordBox.childNodes[1]);
        }
    }
    return wordLetterTextContent;
}
