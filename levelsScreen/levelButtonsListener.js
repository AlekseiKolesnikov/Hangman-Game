'use strict';

import {createLetterBox} from "../wordBox/wordBox.js";
import {fillGameField} from "../letterBox/letterBox.js";
import {levelsDisappearance} from "../animationsControler/smoothAnimations.js";

const hardLevelButton = document.querySelector('#hard-level');
const mediumLevelButton = document.querySelector('#medium-level');
const easyLevelButton = document.querySelector('#easy-level');

/**
 * Each level button logic
 */
export function listeners() {
    hardLevelButton.addEventListener('click', () => {
        createLetterBox();
        fillGameField();
        levelsDisappearance();
    });


    mediumLevelButton.addEventListener('click', () => {
        createLetterBox();
        fillGameField();
        levelsDisappearance()
    });

    easyLevelButton.addEventListener('click', () => {
        createLetterBox();
        fillGameField();
        levelsDisappearance();
    });
}