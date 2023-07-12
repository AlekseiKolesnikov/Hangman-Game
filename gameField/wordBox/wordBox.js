'use strict';

import {generateGameWord} from "./getWord.js";
import {getLettersOfWordBox} from "../getLetters.js";

const wordBox = document.querySelector('#word-box');

export function createLetterBox(getFinalWordCallback, wordLength) {
    let lettersArray;

    generateGameWord((generatedWord) => {
        lettersArray = generatedWord
        for (let letter of lettersArray) {
            wordBox.innerHTML += `
           <div class="letter-container">
               <div class="word-letter">${letter.toUpperCase()}</div>
           </div>
        `
        }
        wordBox.style.gridTemplateColumns = `repeat(${lettersArray.length}, 7%)`;
        getFinalWordCallback(getLettersOfWordBox(wordBox.children));
    }, wordLength)
    return wordBox
}