'use strict';

import {createLetterBox} from "../script/wordBox.js";
import {fillGameField} from "../script/letterBox.js";
import {animateLoading} from "../script/loadingScreen.js";

const gameField = document.querySelector('#game-field');
const startGameButton = document.querySelector('#start-button-container');
const stopGameButton = document.querySelector('#stop-button-container');
const loadingScreen = document.querySelector('#loading-box');
// const createLetterBoxChildren = createLetterBox().children;

//Showing up of main play ground after start button
startGameButton.addEventListener("click", () => {
    createLetterBox()
    fillGameField();
    animateLoading();

    startGameButton.style.display = 'none';
    loadingScreen.style.display = 'block';

    setTimeout(() => {
        loadingScreen.style.display = 'none';
        gameField.style.display ='block';
    }, 1000)

    // while (createLetterBoxChildren.length > 6) {
    //     loadingScreen.style.display = 'block';
    //
    //     if (createLetterBoxChildren.length < 6) {
    //         gameField.style.display = 'block';
    //         break;
    //     }
    // }
});

//Stop Game button
stopGameButton.addEventListener("click", function () {

});
