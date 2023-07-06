// 'use strict';
//
// import {gameFieldAppearance, loaderAppearance, loaderDisappearance} from "./smoothAnimations.js";
//
// const url = 'https://random-word-api.herokuapp.com/word';
//
// /**
//  *  Функция getWord обращается в API и возвращает случайное слово
//  *
//  * @returns {Promise<any>}
//  */
// export async function getWord() {
//     let getWordUrl = await fetch(url);
//     return getWordUrl.json();
// }
//
// function makeWordArray(generatedWord) {
//     let split;
//     let array = [];
//     for (let word of generatedWord) {
//         split = word.split('');
//     }
//     for (let letter of split) {
//         array.push(letter);
//     }
//     return array;
// }
//
// /**
//  * @param loadingHardWordCallback,  функции обратного вызова, вызываются с переданным в неё сгенерированым словом
//  * @param loadingMediumWordCallback
//  * @param loadingEasyWordCallback
//  */
//
// let levelsObject = {
//
// }
// export function generateGameWord(...levelsObject) {
//     getWord().then((result) => {
//         console.log(result[0]);
//         if (result[0].length > 8 && result[0].length < 12) {
//             loaderDisappearance();
//             gameFieldAppearance();
//             levelsClass.hardLevel(makeWordArray(result));
//         } else {
//             generateGameWord(levelsClass.hardLevel);
//             loaderAppearance();
//         }
//
//         // if(result[0].length > 4 && result[0].length < 9) {
//         //     loaderDisappearance();
//         //     gameFieldAppearance();
//         //     loadingMediumWordCallback(makeWordArray(result));
//         // } else {
//         //     generateGameWord(loadingMediumWordCallback);
//         //     loaderAppearance();
//         // }
//         //
//         // if (result[0].length > 0 && result[0].length < 5) {
//         //     loaderDisappearance();
//         //     gameFieldAppearance();
//         //     loadingEasyWordCallback(makeWordArray(result));
//         // } else {
//         //     generateGameWord(loadingEasyWordCallback);
//         //     loaderAppearance();
//         // }
//     })
// }