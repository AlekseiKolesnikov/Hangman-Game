'use strict';

import {gameFieldAppearance, loaderAppearance, loaderDisappearance} from "./smoothAnimations.js";

const url = 'https://random-word-api.herokuapp.com/word';

/**
 *  Функция getWord обращается в API и возвращает случайное слово
 *
 * @returns {Promise<any>}
 */
export async function getWord() {
    let getWordUrl = await fetch(url);
    return getWordUrl.json();
}

function makeWordArray(generatedWord) {
    let split;
    let array = [];
    for (let word of generatedWord) {
        split = word.split('');
    }
    for (let letter of split) {
        array.push(letter);
    }
    return array;
}

/**
 * @param loadingCallback функция обратного вызова, вызывается с переданным в неё сгенерированым словом
 */
export function generateGameWord(loadingCallback) {
    getWord().then((result) => {
        console.log(result[0]);
        if (result[0].length < 5) {
            loaderDisappearance();
            gameFieldAppearance();
            loadingCallback(makeWordArray(result));
        } else {
            generateGameWord(loadingCallback);
            loaderAppearance();
        }
    })
}
