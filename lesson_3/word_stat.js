/*eslint strict: ["error", "global"]*/

"use strict";

/**
 *
 * @param {string} text
 * @returns {*|string[]}
 */
function getWords(text) {
    return text.split(" ");
}

/**
 *
 * @param {string} word
 * @returns {number[]}
 */
function wordToChars(word) {
    return word.split("").map(function (letter) {
        return letter.charCodeAt(0);
    });
}

/**
 *
 * @param {number[]} chars
 * @returns {number}
 */
function charsSum(chars) {
    return chars.reduce(function (a, b) {
        return a + b;
    }, 0);
}


/**
 *
 * @param text
 * @return {{sum: number, word: string}[]}
 */
function wordStat(text) {
    return getWords(text).map(function (word) {
        return {"word": word, "sum": charsSum(wordToChars(word))};
    });
}
