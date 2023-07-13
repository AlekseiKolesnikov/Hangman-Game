'use strict';

import {
    gameFieldDisappearance, startButtonAppearance,
    startOverButtonAppearance,
    victoryScreenAppearance, victoryScreenDisAppearance
} from "../animationsControler/smoothAnimations.js";

const startOverButton = document.querySelector('#start-over-button');

export function victoryScreen() {
    gameFieldDisappearance();
    victoryScreenAppearance();
    startOverButtonAppearance();

    startOverButton.addEventListener('click', () => {
        victoryScreenDisAppearance();
        startButtonAppearance();
    });
}