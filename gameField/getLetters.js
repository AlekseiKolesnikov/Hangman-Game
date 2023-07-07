'use strict';

import {fillGameField} from "./letterBox/letterBox.js";
import {createLetterBox} from "./wordBox/wordBox.js";

export function getLettersOfLetterBox() {
    const letterBoxItems = fillGameField().childNodes;

    let letterTextContent = [];
    for (let currentItemLetterBox of letterBoxItems) {
        letterTextContent.push(currentItemLetterBox);
    }
    return letterTextContent;
}

export function getLettersOfWordBox() {
    const wordLetters = createLetterBox().childNodes;
    let wordLetterTextContent = [];

    for (let currentItemWordBox of wordLetters) {
        if (currentItemWordBox.nodeType === Node.ELEMENT_NODE) {
            console.log(currentItemWordBox);
            wordLetterTextContent.push(currentItemWordBox.childNodes[1]);
        }
    }
    return wordLetterTextContent;
}

