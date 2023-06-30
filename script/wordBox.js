'use strict';

import {makeWordArray} from "./getWord.js";

const wordBox = document.querySelector('#word-box');

export async function createLetterBox() {
    export let lettersArray = await makeWordArray();

    while (lettersArray.length > 6) {
        lettersArray = makeWordArray();
    }

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
