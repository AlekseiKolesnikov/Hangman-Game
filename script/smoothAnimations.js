'use strict';

const loader = document.querySelector('#loader');
const gameField = document.querySelector('#game-field');

export function loaderAppearance() {
    loader.style.cssText = `
    opacity: 0;
    transition: .3s;
    animation: show-loader .3s 1;
    animation-fill-mode: forwards;
    display: block;`;
}

export function loaderDisappearance() {
    loader.style.cssText = `
    opacity: 1;
    transition: .3s;
    animation: hide-loader .4s 1;
    animation-fill-mode: forwards;`;
}

export function gameFieldAppearance() {
    gameField.style.cssText = `
    opacity: 0;
    transition: .3s;
    animation: show-game-field .3s 1;
    animation-fill-mode: forwards;
    animation-delay: .2s;
    display: block;`;
}