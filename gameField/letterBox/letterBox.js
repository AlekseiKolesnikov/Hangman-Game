'use strict';

const letterBox = document.querySelector('#letter-box');

//Letters to letter-box
let alphabetArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

//Letter-box inner logic
export function fillGameField() {

    for (let letter of alphabetArray) {
        let currentLetter = document.createElement('div');
        currentLetter.classList.add('letter');
        currentLetter.setAttribute('value', `${letter}`)

        currentLetter.append(letter);
        letterBox.append(currentLetter);
    }
    return letterBox
}

