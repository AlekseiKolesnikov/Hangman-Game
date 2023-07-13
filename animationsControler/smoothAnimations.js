'use strict';

const levelsBox = document.querySelector('#levels-box');
const loader = document.querySelector('#loader');
const gameField = document.querySelector('#game-field');
const victoryBox = document.querySelector('#victory-box');
const victoryText = document.querySelector('#victory-text');
const defeatText = document.querySelector('#defeat-text');
const startOverButton = document.querySelector('#start-over-button');
const startGameButton = document.querySelector('#start-button-container');


export function startButtonDisAppearance() {
    startGameButton.style.cssText = `
    opacity: 1;
    transition: .3s;
    animation: hide-start-button .3s 1;
    animation-fill-mode: forwards;`;
}

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

export function gameFieldDisappearance() {
    gameField.style.cssText = `
    opacity: 1;
    transition: .8s;
    animation: hide-game-field .8s 1;
    animation-fill-mode: forwards;`;
    setTimeout(() => {
        gameField.style.display = 'none';
    }, 800);
}

export function letterDisappearance(letter) {
    letter.style.cssText = `
    opacity: 1;
    transition: .5s;
    animation: hide-letter .5s 1;
    animation-fill-mode: forwards;`;
    setTimeout(() => {
        letter.remove();
    }, 800);
}

export function defeatScreenAppearance() {
    victoryText.remove()
    victoryBox.style.cssText = `
    opacity: 0;
    transition: .3s;
    animation: show-victory-box .3s 1;
    animation-fill-mode: forwards;
    animation-delay: .5s;
    display: block;`;

    defeatText.style.display = 'block';
}

export function victoryScreenAppearance() {
    defeatText.remove();
    victoryBox.style.cssText = `
    opacity: 0;
    transition: .3s;
    animation: show-victory-box .3s 1;
    animation-fill-mode: forwards;
    animation-delay: .5s;
    display: block;`;

    victoryText.style.display = 'block';
}

export function victoryScreenDisAppearance() {
    victoryBox.style.cssText = `
    opacity: 1;
    transition: .3s;
    animation: hide-victory-box .3s 1;
    animation-fill-mode: forwards;`;
}

export function startOverButtonAppearance() {
    startOverButton.style.cssText = `
    opacity: 0;
    transition: .3s;
    animation: show-start-over-button .3s 1;
    animation-fill-mode: forwards;
    animation-delay: 1.5s;
    display: block;`
}
