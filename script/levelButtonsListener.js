'use strict';

import {createLetterBox} from "./wordBox.js";
import {fillGameField} from "./letterBox.js";
import {levelsDisappearance} from "./smoothAnimations.js";

const hardLevelButton = document.querySelector('#hard-level');
// const mediumLevelButton = document.querySelector('#medium-level');
// const easyLevelButton = document.querySelector('#easy-level');

/**
 * Each level button logic
 */

if (hardLevelButton) {
    hardLevelButton.addEventListener('click', () => {
        createLetterBox();
        fillGameField();
        levelsDisappearance();
    });
}

// mediumLevelButton.addEventListener('click', () => {
//     loadingScreen();
//     createLetterBox();
//     fillGameField();
//     levelsDisappearance()
// });
//
// easyLevelButton.addEventListener('click', () => {
//     loadingScreen();
//     createLetterBox();
//     fillGameField();
//     levelsDisappearance();
// });