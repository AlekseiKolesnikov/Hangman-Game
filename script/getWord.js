'use strict';

import {animateLoading} from "./loadingScreen.js";

const loadingScreen = document.querySelector('#loading-box');
const gameField = document.querySelector('#game-field');
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
        animateLoading();
        console.log(result[0]);
        if (result[0].length < 12) {
            loadingScreen.style.display = 'none';
            gameField.style.display ='block';
            loadingCallback(makeWordArray(result));
        } else {
            generateGameWord(loadingCallback);
            loadingScreen.style.display = 'block';
        }
        return result[0];
    })
}
