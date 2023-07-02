'use strict';

import {createLetterBox} from "../script/wordBox.js";
import {fillGameField} from "../script/letterBox.js";

const gameField = document.querySelector('#game-field');
const startGameButton = document.querySelector('#start-button-container');
const stopGameButton = document.querySelector('#stop-button-container');
const loadingScreen = document.querySelector('#loading-box');

//Showing up of main play ground after start button
startGameButton.addEventListener("click", () => {
    loadingScreen.style.display = 'block';
    gameField.style.display = 'none';
    startGameButton.style.display = 'none';
    
    fillGameField();
    createLetterBox();
});

//Stop Game button
stopGameButton.addEventListener("click", function () {

});
