/*eslint strict: ["error", "global"]*/

"use strict";

let text = {
    title: "Введите число",
    result: "Среднее арифметическое: ",
    length: "Количество чисел: ",
    sum: "Сумма: ",
    error: "Ошибка: пустой ввод"
};

let input;
let nums = [];
let message = text.error;

function sum(nums) {
    return nums.reduce((a, b) => (a + b));
}

function average(nums) {
    return sum(nums) / nums.length;
}

function setMessage(nums) {
    message = text.result + average(nums) + ", " + text.length + nums.length + ", " + text.sum + sum(nums);
    return message;
}

function getInput() {
    input = Number(prompt(text.title, ""));
    while (input !== 0) {
        nums.push(input);
        console.log(setMessage(nums));
        getInput();
    }
}

getInput();
alert(message);