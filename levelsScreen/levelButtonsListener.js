'use strict';

import {levelsDisappearance} from "../animationsControler/smoothAnimations.js";
import {getLettersOfWordBox} from "../gameField/getLetters.js";
import {createLetterBox} from "../gameField/wordBox/wordBox.js";
// import {getLettersOfWordBox} from "../gameField/getLetters.js";
// import {createLetterBox} from "../gameField/wordBox/wordBox.js";

const hardLevelButton = document.querySelector('#hard-level');
const mediumLevelButton = document.querySelector('#medium-level');
const easyLevelButton = document.querySelector('#easy-level');

/**
 * Each level button logic
 */
export function listeners() {
    hardLevelButton.addEventListener('click', () => {
        levelsDisappearance();
        createLetterBox()
    });

    mediumLevelButton.addEventListener('click', () => {
        levelsDisappearance();
    });

    easyLevelButton.addEventListener('click', () => {
        levelsDisappearance();
    });
}