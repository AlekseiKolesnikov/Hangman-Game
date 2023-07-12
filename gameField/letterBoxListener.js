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
        let wordLetters = wordBoxLetters;

        letterOfLetterBox.forEach((item) => {
            let wrongLetter = false;

            item.addEventListener('click', () => {
                for (let wordBoxLetter of wordLetters) {
                    if (item.textContent === wordBoxLetter.textContent) {
                        wordBoxLetter.style.display = 'block'
                    } else {
                        wrongLetter = true
                    }
                }
                if (wrongLetter === true) {
                    console.log('wrong letter')
                    let g = getHangmanDetails();
                    g[0].style.display = 'block';
                }
            });
        })
    }, wordLength)
}