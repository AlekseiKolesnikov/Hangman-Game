'use strict';

import {getLettersOfLetterBox, getLettersOfWordBox} from "./getLetters.js";
import {createLetterBox} from "./wordBox/wordBox.js";

/**
 * Letters in the letterBox.js matching with word letters in WordBox.js
 */
export function lettersBoxListener() {
    let letterOfLetterBox = getLettersOfLetterBox();
    createLetterBox((wordBoxLetters) => {
        console.log(wordBoxLetters)
        for (let letterBoxItem of letterOfLetterBox) {
        for (let wordBoxItem of wordBoxLetters) {
            letterBoxItem.addEventListener('click', () => {
                if (letterBoxItem.textContent === wordBoxItem.textContent) {
                    wordBoxItem.style.display = 'block';
                } else {
                    // getHangmanDetail().style.display = 'block'
                }
            });
        }
        }
    })
    console.log(letterOfLetterBox)
}