// 'use strict';
//
//
// import {generateGameWord} from "./getWord.js";
//
// const wordBox = document.querySelector('#word-box');
//
// let lettersArray;
//
// export function createLetterBox(levelLabel) {
//     generateGameWord((...levelsFunctions) => {
//         for (let level of levelsFunctions) {
//             if (levelLabel === 'Hard') {
//                 generateGameWord(level[0])
//                 lettersArray = level[0];
//             }
//             if (levelLabel === 'Medium') {
//                 generateGameWord(level[1])
//                 lettersArray = level[1];
//             }
//             if (levelLabel === 'Easy') {
//                 generateGameWord(level[2])
//                 lettersArray = level[2];
//             }
//         }
//         for (let letter of lettersArray) {
//             wordBox.innerHTML += `
//            <div class="letter-container">
//                <div class="word-letter">${letter.toUpperCase()}</div>
//            </div>
//         `
//         }
//         wordBox.style.gridTemplateColumns = `repeat(${lettersArray.length}, 7%)`;
//     })
//     return wordBox;
// }