/*eslint strict: ["error", "global"]*/

"use strict";

let text = {
    title: "Введите значение стороны равностороннего треугольника:",
    result: "Площадь равностороннего треугольника равна: ",
    error: "Сторона введена не верно"
};
let side = parseFloat(prompt(text.title, ""));

function triangleArea(side) {
    return Math.pow(side, 2) * Math.sqrt(3) / 4;
}

let message = (Number(side) > 0) ? text.result + triangleArea(side)  : text.error;
alert(message);
