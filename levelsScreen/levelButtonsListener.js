'use strict';

import {createLetterBox} from "../gameField/wordBox/wordBox.js";
import {levelsDisappearance} from "../animationsControler/smoothAnimations.js";
import {lettersBoxListener} from "../gameField/letterBoxListener.js";

const hardLevelButton = document.querySelector('#hard-level');
const mediumLevelButton = document.querySelector('#medium-level');
const easyLevelButton = document.querySelector('#easy-level');

/**
 * Each level button logic
 */
export function listeners() {
    hardLevelButton.addEventListener('click', () => {
        levelsDisappearance();
        lettersBoxListener();
    });


    mediumLevelButton.addEventListener('click', () => {
        levelsDisappearance();
        lettersBoxListener();
    });

    easyLevelButton.addEventListener('click', () => {
        levelsDisappearance();
        lettersBoxListener();
    });
}