'use strict';

import {loadingScreen} from "./loadingScreen.js";
import {createLetterBox} from "./wordBox.js";
import {fillGameField} from "./letterBox.js";

const hardLevelButton = document.querySelector('#hard-level');
const mediumLevelButton = document.querySelector('#medium-level');
const easyLevelButton = document.querySelector('#easy-level');

/**
 * Each level button logic
 */
hardLevelButton.addEventListener('click', () => {
    loadingScreen();
    createLetterBox();
    fillGameField();
});

mediumLevelButton.addEventListener('click', () => {
    loadingScreen();
    createLetterBox();
    fillGameField();
});

easyLevelButton.addEventListener('click', () => {
    loadingScreen();
    createLetterBox();
    fillGameField();
});