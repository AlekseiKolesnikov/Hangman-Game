'use strict';

import {levelsAppearance} from "../script/smoothAnimations.js";
import {listeners} from "../script/levelButtonsListener.js";

const startGameButton = document.querySelector('#start-button-container');
const stopGameButton = document.querySelector('#stop-button-container');

//Showing up of main play ground after start button
startGameButton.addEventListener('click', () => {
    levelsAppearance();
    listeners();

    startGameButton.style.cssText = `
    opacity: 1;
    transition: .3s;
    animation: hide-start-button .3s 1;
    animation-fill-mode: forwards;`;
    setTimeout(() => {
        startGameButton.remove();
    }, 300);
});

//Stop Game button
stopGameButton.addEventListener('click', function () {

});
