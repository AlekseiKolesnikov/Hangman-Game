'use strict';

const levelsBox = document.querySelector('#levels-box');

/**
 * Level boxes creation
 */
export function levelsScreen() {
    levelsBox.innerHTML = `
    <div id="hard-level" class="levels">
        <button id="hard-level-btn" class="level-buttons">Hard Level</button>
    </div>
    <div id="medium-level" class="levels">
        <button id="medium-level-btn" class="level-buttons">Medium Level</button>
    </div>
    <div id="easy-level" class="levels">
        <button id="easy-level-btn" class="level-buttons">Easy Level</button>
    </div>`;
}

