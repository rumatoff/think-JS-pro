/*eslint strict: ["error", "global"]*/

"use strict";

const text = {
    title: "Введите дату в американском формате:",
    result: "Дата в европейском формате: ",
    error: "Дата введена неверно"
};
let monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const americanDateFormat = /^(0?[1-9]|1[012])\/(0?[1-9]|[12][0-9]|3[01])\/\d{4}$/;

let inputDate = prompt(text.title, "");

function isValidFormat(inputDate) {
    return americanDateFormat.test(inputDate);
}

function isLeapYear(year) {
    return !((year % 4) || (!(year % 100) && (year % 400)));
}

function isValidDate(date) {
    if (isLeapYear(date.yy)) {
        monthLength[1] = 29;
    }
    return date.dd <= monthLength[date.mm - 1];
}

function dateFormat(date) {
    return date.dd.padStart(2, "0") + "/" + date.mm.padStart(2, "0") + "/" + date.yy;
}

let message = text.error;

if (isValidFormat(inputDate)) {
    inputDate = inputDate.split("/");
    let date = {
        mm: parseInt(inputDate[0]),
        dd: parseInt(inputDate[1]),
        yy: parseInt(inputDate[2])
    };
    if (isValidDate(date)) {
        message = text.result + dateFormat(date);
    }
}
alert(message);
