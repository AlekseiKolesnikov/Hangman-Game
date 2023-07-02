'use strict';

import {createLetterBox} from "../script/wordBox.js";
import {fillGameField} from "../script/letterBox.js";
import {animateLoading} from "../script/loadingScreen.js";
import {generateGameWord} from "../script/getWord.js";

const gameField = document.querySelector('#game-field');
const startGameButton = document.querySelector('#start-button-container');
const stopGameButton = document.querySelector('#stop-button-container');
const loadingScreen = document.querySelector('#loading-box');

//Showing up of main play ground after start button
startGameButton.addEventListener("click", () => {
    startGameButton.style.display = 'none';
    gameField.style.display = 'block';
    createLetterBox();
    fillGameField();
});

//Stop Game button
stopGameButton.addEventListener("click", function () {

});
