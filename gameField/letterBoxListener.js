'use strict';

import {getLetterOfLetterBox, getLetterOfTheWord} from "./getLetters.js";
import {getHangmanDetail} from "./hangman/hagmanLogic.js";

/**
 * Letters in the letterBox.js matching with word letters in WordBox.js
 */
export function lettersBoxListener() {
    getLetterOfLetterBox().addEventListener('click', () => {
        if (getLetterOfLetterBox() === getLetterOfTheWord()) {
            getLetterOfTheWord().style.display = 'block';
        } else {
            getHangmanDetail().style.display = 'block'
        }
    });
}