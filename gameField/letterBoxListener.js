'use strict';

import {getLettersOfLetterBox} from "./getLetters.js";
import {createLetterBox} from "./wordBox/wordBox.js";
import {victoryScreen} from "../victoryScreen/victoryScreen.js";
import {getBodyArray} from "./hangman/hagmanLogic.js";
import {gameFieldDisappearance, letterDisappearance} from "../animationsControler/smoothAnimations.js";

/**
 * Letters in the letterBox.js matching with word letters in WordBox.js
 */
export function lettersBoxListener(wordMaxLength, wordMinLength) {
    let letterOfLetterBox = getLettersOfLetterBox();

    createLetterBox((wordBoxLetters) => {
        let wordLetters = wordBoxLetters;
        let count = 0;
        let wrongLetter = true;
        let lettersCountArray = [];

        letterOfLetterBox.forEach((item) => {
            item.addEventListener('click', () => {
                let matchFound = false;

                for (let wordBoxLetter of wordLetters) {
                    if (item.textContent === wordBoxLetter.textContent) {
                        lettersCountArray.push(wordBoxLetter);
                        wordBoxLetter.style.display = 'block';
                        letterDisappearance(item);
                        matchFound = true;
                    }
                }
                if (lettersCountArray.length === wordLetters.length) {
                    gameFieldDisappearance();
                    victoryScreen();
                }
                if (matchFound) {
                    wrongLetter = false;
                } else {
                    letterDisappearance(item);
                    wrongLetter = true;
                    console.log('wrong letter');
                    getBodyArray()[count].style.display = 'block';
                    count++;
                }
            });
        })
    }, wordMaxLength, wordMinLength)
}