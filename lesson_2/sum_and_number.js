/*eslint strict: ["error", "global"]*/

"use strict";

const arr = [91, 93, 45, -67, -96, -40, 34, -96, 42, -58];

function getNegative(array) {
    return array.filter(function (item) {
        return item < 0;
    });
}

function sumAndNumber(array) {
    return {
        count: array.length,
        sum: array.reduce(function (a, b) {
            return a + b;
        }, 0)
    };
}
console.log(sumAndNumber(getNegative(arr)));