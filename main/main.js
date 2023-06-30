'use strict';

import {createLetterBox} from "../script/wordBox.js";
import {fillGameField} from "../script/letterBox.js";
// import {lettersArray} from "../script/wordBox.js";

const gameField = document.querySelector('#game-field');
const startGameButton = document.querySelector('#start-button-container');
const stopGameButton = document.querySelector('#stop-button-container');

//Showing up of main play ground after start button
startGameButton.addEventListener("click", () => {
    gameField.style.display = 'block';
    startGameButton.style.display = 'none';

    await createLetterBox();
    fillGameField();
});

//Stop Game button
stopGameButton.addEventListener("click", function () {

});
