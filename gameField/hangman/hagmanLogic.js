'use strict';

let isFirstCall = true;

function getBodyArray() {
    const hangmanDetails = document.querySelectorAll('.person');
    let array = [];

    for (let item of hangmanDetails) {
        array.push(item)
    }
    return array;
}

export function getHangmanDetails() {
    if (isFirstCall) {
        isFirstCall = false;
        return getBodyArray();
    } else {
        let bodyParts = getBodyArray();
        bodyParts.shift();
        console.log(bodyParts)
        return bodyParts;
    }
}
