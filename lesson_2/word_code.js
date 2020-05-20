/*eslint strict: ["error", "global"]*/

"use strict";

const text = "Lorem ipsum dolor sit amet.";

function getWords(text) {
    return text.split(" ");
}

function wordToChars(word) {
    let chars = [];
    word.split("").map(function (letter) {
        chars.push(letter.charCodeAt(0));
    });
    return chars;
}

function charsSum(chars) {
    return chars.reduce(function (a, b) {
        return a + b;
    });
}

function getWordsCodesSum(text) {
    let result = [];
    getWords(text).map(function (word) {
        result.push({"word": word, "sum": charsSum(wordToChars(word))});
    });
    return result;
}

console.log(getWordsCodesSum(text));