/*eslint strict: ["error", "global"]*/

"use strict";

let text = {
    title: "Введите строку:",
    result: "Результат: ",
    error: "Введена пустая строка"
};
let incomingText = prompt(text.title, "");

function reverse(incomingText) {
    let result = "";
    for (let i = incomingText.length - 1; i >= 0; i--) result += incomingText[i];
    return result;
}

let message = (incomingText.length > 0) ? text.result + reverse(incomingText) : text.error;
alert(message);