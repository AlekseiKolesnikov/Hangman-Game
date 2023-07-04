'use strict';

import {createLetterBox} from "../script/wordBox.js";
import {fillGameField} from "../script/letterBox.js";

const startGameButton = document.querySelector('#start-button-container');
const stopGameButton = document.querySelector('#stop-button-container');

//Showing up of main play ground after start button
startGameButton.addEventListener("click", () => {
    createLetterBox()
    fillGameField();
    startGameButton.style.display = 'none';
});

//Stop Game button
stopGameButton.addEventListener("click", function () {

});
