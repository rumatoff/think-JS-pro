/*eslint strict: ["error", "global"]*/

"use strict";

const text = {
    title: "Введите текст:",
    result: "Текст без лишних пробелов: ",
    error: "Текст должен содержать двойной пробел"
};

const extraSpaces = /\s\s/gi;
const space = " ";
let incomingText = prompt(text.title, "");

function formatText(formattedText) {
    return formattedText.replace(extraSpaces, space);
}

let message = (extraSpaces.test(incomingText)) ? text.result + formatText(incomingText) : text.error;
alert(message);
