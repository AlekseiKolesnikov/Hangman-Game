'use strict';

import {levelsDisappearance} from "../animationsControler/smoothAnimations.js";

const hardLevelButton = document.querySelector('#hard-level');
const mediumLevelButton = document.querySelector('#medium-level');
const easyLevelButton = document.querySelector('#easy-level');

/**
 * Each level button logic
 */
export function listeners() {
    hardLevelButton.addEventListener('click', () => {
        levelsDisappearance();
    });

    mediumLevelButton.addEventListener('click', () => {
        levelsDisappearance();
    });

    easyLevelButton.addEventListener('click', () => {
        levelsDisappearance();
    });
}