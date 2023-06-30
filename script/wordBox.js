'use strict';

import {makeWordArray} from "./getWord.js";

const wordBox = document.querySelector('#word-box');

export let lettersArray = makeWordArray();

while (lettersArray.length > 11) {
    lettersArray = makeWordArray();
}

export function createLetterBox() {

    for (let letter of lettersArray) {
        wordBox.innerHTML += `
           <div class="letter-container">
               <div class="word-letter">${letter.toUpperCase()}</div>
           </div>
        `
    }
    wordBox.style.gridTemplateColumns = `repeat(${lettersArray.length}, 7%)`;

    return wordBox;
}
