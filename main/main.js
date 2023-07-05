'use strict';

import {levelsScreen} from "../script/levelsScreen.js";

const startGameButton = document.querySelector('#start-button-container');
const stopGameButton = document.querySelector('#stop-button-container');

//Showing up of main play ground after start button
startGameButton.addEventListener('click', () => {
    levelsScreen();
    startGameButton.style.cssText = `
    opacity: 1;
    transition: .2s;
    animation: hide-start-button .2s 1;
    animation-fill-mode: forwards;`;

    setTimeout(() => {
        startGameButton.remove();
    }, 200);
});

//Stop Game button
stopGameButton.addEventListener('click', function () {

});
