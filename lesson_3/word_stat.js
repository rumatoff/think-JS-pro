/*eslint strict: ["error", "global"]*/

"use strict";

function getWords(text) {
    return text.split(" ");
}

function wordToChars(word) {
    return word.split("").map(function (letter) {
        return letter.charCodeAt(0);
    });
}

function charsSum(chars) {
    return chars.reduce(function (a, b) {
        return a + b;
    }, 0);
}

function wordStat(text) {
    return getWords(text).map(function (word) {
        return {"word": word, "sum": charsSum(wordToChars(word))};
    });
}
