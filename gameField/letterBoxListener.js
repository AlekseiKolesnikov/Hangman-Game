'use strict';

import {getLettersOfLetterBox} from "./getLetters.js";
import {createLetterBox} from "./wordBox/wordBox.js";
import {getHangmanDetails} from "./hangman/hagmanLogic.js";

/**
 * Letters in the letterBox.js matching with word letters in WordBox.js
 */
export function lettersBoxListener(wordLength) {
    let letterOfLetterBox = getLettersOfLetterBox();

    createLetterBox((wordBoxLetters) => {
        for (let letterBoxItem of letterOfLetterBox) {
        for (let wordBoxItem of wordBoxLetters) {
            letterBoxItem.addEventListener('click', () => {
                if (letterBoxItem.textContent === wordBoxItem.textContent) {
                    wordBoxItem.style.display = 'block';
                } else {
                    console.log(getHangmanDetails());
                }
            });
        }
        }
    }, wordLength)
}