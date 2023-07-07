'use strict';

import {getLettersOfLetterBox, getLettersOfTheWord} from "./getLetters.js";
import {getHangmanDetail} from "./hangman/hagmanLogic.js";

/**
 * Letters in the letterBox.js matching with word letters in WordBox.js
 */
export function lettersBoxListener() {
    let letterOfLetterBox = getLettersOfLetterBox();
    let letterOfWordBox = getLettersOfTheWord();
    console.log(letterOfLetterBox);
    console.log(letterOfWordBox);
    for (let letterBoxItem of letterOfLetterBox) {
        for (let wordBoxItem of letterOfWordBox) {
            letterBoxItem.addEventListener('click', () => {
                if (letterBoxItem.textContent === getLettersOfTheWord()) {
                    getLettersOfTheWord().style.display = 'block';
                } else {
                    getHangmanDetail().style.display = 'block'
                }
            });
        }
    }
}