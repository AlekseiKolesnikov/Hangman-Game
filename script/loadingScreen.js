'use strict';

const loadingPresent = document.querySelector('#loading-present');
const progress = document.querySelector('#progress');

let count = 1;
let per = 1;

let loading = setInterval(animateLoading, 30);

export function animateLoading() {
    if (count === 100 && per === 100) {
        clearInterval(loading);
    } else {
        per = per + 1;
        count = count + 1;

        progress.style.width = per + '%';
        loadingPresent.textContent = count + "%";
    }
    return per;
}