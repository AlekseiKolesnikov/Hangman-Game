'use strict';

import {getLettersOfLetterBox} from "./getLetters.js";
import {createLetterBox} from "./wordBox/wordBox.js";
import {getHangmanDetail} from "./hangman/hagmanLogic.js";

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
                }
                if (letterBoxItem.textContent !== wordBoxItem.textContent) {
                    console.log(getHangmanDetail())
                    // getHangmanDetail().style.display = 'block';
                }
            });
        }
        }
    })
}