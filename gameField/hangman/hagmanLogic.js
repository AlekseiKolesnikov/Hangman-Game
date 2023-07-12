'use strict';

const hangmanDetails = document.querySelectorAll('.person');

export function getHangmanDetails() {
    let hangmanDetail = [];
    let bodyPart = hangmanDetail.shift();
    for(let detail of hangmanDetails) {
        hangmanDetail.push(detail);
    }
    console.log(bodyPart)
    return hangmanDetail[0];
}
