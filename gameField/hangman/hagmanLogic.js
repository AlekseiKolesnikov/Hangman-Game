'use strict';

const hangmanDetails = document.querySelectorAll('.person');
// let isFirstCall = true;

export function getBodyArray() {
    let bodyParts = hangmanDetails;
    let array = [];

    for (let item of bodyParts) {
        array.push(item)
    }
    return array;
    // if (isFirstCall) {
    //     isFirstCall = false;
    //     console.log(array)
    //     return array;
    // } else {
    //     array.shift();
    //     console.log(array)
    //     return array;
    // }
}
