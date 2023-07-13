'use strict';

import {
    defeatScreenAppearance,
    startOverButtonAppearance,
    victoryScreenAppearance, victoryScreenDisAppearance
} from "../animationsControler/smoothAnimations.js";
import {launcher} from "../main/main.js";

const startOverButton = document.querySelector('#start-over-button');

function overButtonListener() {
    startOverButton.addEventListener('click', () => {
        victoryScreenDisAppearance();
        launcher();
    });
}

export function victoryScreen() {
    victoryScreenAppearance();
    startOverButtonAppearance();
    overButtonListener()
}

export function defeatScreen() {
    defeatScreenAppearance();
    startOverButtonAppearance();
    overButtonListener()
}