'use strict';

const levelsBox = document.querySelector('#levels-box');

/**
 * Level boxes creation
 */
export function levelsScreen() {
    levelsBox.innerHTML = `
    <div id="hard-level" class="levels"></div>
    <div id="medium-level" class="levels"></div>
    <div id="easy-level" class="levels"></div>`;
}

