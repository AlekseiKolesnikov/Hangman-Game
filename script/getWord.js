'use strict';

const url = 'https://random-word-api.herokuapp.com/word';

async function getWord() {

    let getWordUrl = await fetch(url);
    let response = await getWordUrl.json();

    return await response;
}

export async function makeWordArray() {
    let receiveWord = await getWord();

    let split;
    let array = [];

    for (let word of receiveWord) {
        split = word.split('');
    }
    for (let letter of split) {
        array.push(letter);
    }
    return array;
}
