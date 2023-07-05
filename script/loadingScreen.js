'use strict';

const loader = document.querySelector('#loader');

export function loadingScreen() {
    loader.innerHTML = `
    <div class="circle"></div>
    <p class="loading">Loading</p>`;
}