// 'use strict';
//
// import {createLetterBox} from "./wordBox.js";
// import {fillGameField} from "./letterBox.js";
// import {levelsDisappearance} from "./smoothAnimations.js";
//
// const hardLevelButton = document.querySelector('#hard-level');
// const mediumLevelButton = document.querySelector('#medium-level');
// const easyLevelButton = document.querySelector('#easy-level');
//
// /**
//  * Each level button logic
//  */
// export function listeners() {
//     hardLevelButton.addEventListener('click', () => {
//         createLetterBox('Hard');
//         fillGameField();
//         levelsDisappearance();
//     });
//
//
//     mediumLevelButton.addEventListener('click', () => {
//         createLetterBox('Medium');
//         fillGameField();
//         levelsDisappearance()
//     });
//
//     easyLevelButton.addEventListener('click', () => {
//         createLetterBox('Easy');
//         fillGameField();
//         levelsDisappearance();
//     });
// }