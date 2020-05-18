/*eslint strict: ["error", "global"]*/

"use strict";

let text = {
    title: "Введите текст:",
    result: "Текст без лишних пробелов: ",
    error: "Текст должен содержать двойной пробел"
};

let extraSpaces = /\s\s/gi;
let space = " ";
let incomingText = prompt(text.title, "");

function formatText(formattedText) {
    return formattedText.replace(extraSpaces, space);
}

let message = (extraSpaces.test(incomingText)) ? text.result + formatText(incomingText) : text.error;
alert(message);
