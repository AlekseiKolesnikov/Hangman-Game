'use strict';

let name = 'Egor',
    age = 19,
    sex = 'male',
    job = 'Software Engineer',
    hobby = 'swimming';

let arr = [name, age, job, sex, hobby];

function element(array) {
    let shift = arr.shift();
    console.log(shift)
}

element();
element();