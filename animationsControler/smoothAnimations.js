'use strict';

import {lettersBoxListener} from "../gameField/letterBoxListener.js";

const levelsBox = document.querySelector('#levels-box');
const loader = document.querySelector('#loader');
const gameField = document.querySelector('#game-field');

export function levelsAppearance() {
    levelsBox.style.cssText = `
    opacity: 0;
    transition: .5s;
    animation: show-levels .5s 1;
    animation-fill-mode: forwards;
    display: block;`;
}

export function levelsDisappearance() {
    levelsBox.style.cssText = `
    opacity: 1;
    transition: .3s;
    animation: hide-levels .3s 1;
    animation-fill-mode: forwards;
    display: none;`;
    setTimeout(() => {
        levelsBox.remove();
    }, 300)
}

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
    animation-fill-mode: forwards;
    display: none`;
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