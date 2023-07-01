'use strict';

import {createLetterBox} from "../script/wordBox.js";
import {fillGameField} from "../script/letterBox.js";
import {loadingScreen} from "../script/loadingScreen.js";

const gameField = document.querySelector('#game-field');
const startGameButton = document.querySelector('#start-button-container');
const stopGameButton = document.querySelector('#stop-button-container');
const script = document.querySelector('script');

//Showing up of main play ground after start button
startGameButton.addEventListener("click", () => {
    loadingScreen().style.display = 'block';
    startGameButton.style.display = 'none';

    if (!createLetterBox()) {
        gameField.style.display = 'none';
    } else {
        gameField.style.display = 'block';
        fillGameField();
    }
});

//Stop Game button
stopGameButton.addEventListener("click", function () {

});
