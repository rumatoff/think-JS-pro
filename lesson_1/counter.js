/*eslint strict: ["error", "global"]*/

"use strict";

const text = {
    title: "Введите текст:",
    result: "Количество букв: ",
    vowels: "гласнных - ",
    consonants: ", соглассных - ",
    error: "Текст должен содержать хотябы одну букву"
};
let incomingText = prompt(text.title, "");
const letters = /[a-zA-Z]+/g;
const vowels = /[aeiou]/gi;
const consonants = /(?![aeiou])[a-z]/gi;

const countVowels = incomingText => (incomingText.match(vowels) || []).length;
const countConsonants = incomingText => (incomingText.match(consonants) || []).length;

const vowelsText = text.vowels + countVowels(incomingText);
const consonantsText = text.consonants + countConsonants(incomingText);

let message;
if (letters.test(incomingText)) {
    message = text.result + vowelsText + consonantsText;
} else {
    message = text.error;
}
alert(message);