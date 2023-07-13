'use strict';

const hangmanDetails = document.querySelectorAll('.person');

export function getBodyArray() {
    let bodyParts = hangmanDetails;
    let array = [];

    for (let item of bodyParts) {
        array.push(item)
    }
    return array;
}
