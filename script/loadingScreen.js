'use strict';

const loader = document.querySelector('#loader');

export function animateLoading() {
    loader.innerHTML = `
    <div class="dot orig four ">•</div>
    <div class="dot orig three ">•</div>
    <div class="dot orig two ">•</div>
    <div class="dot orig one ">•</div>`;
}