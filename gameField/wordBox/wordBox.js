'use strict';

import {generateGameWord} from "./getWord.js";
import {getLettersOfWordBox} from "../getLetters.js";

const wordBox = document.querySelector('#word-box');

let lettersArray;

export function createLetterBox(getFinalWord) {
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
        getFinalWord(getLettersOfWordBox(wordBox.childNodes));
    })
    return wordBox
}