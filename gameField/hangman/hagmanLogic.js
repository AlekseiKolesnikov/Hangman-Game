'use strict';

const hangmanDetails = document.querySelectorAll('.person');

export function getHangmanDetail() {
    let hangmanDetail;
    for(let detail of hangmanDetails) {
        hangmanDetail = detail;
    }
    return hangmanDetail;
}