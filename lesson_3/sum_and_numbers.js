/*eslint strict: ["error", "global"]*/

"use strict";

/**
 Отчет о количестве и сумме положительных элементов массива
 @typedef {Object} Result
 @property {number} count Количество положительных элементов
 @property {number} sum Сумма положительных элементов
 */
/**
 * Расчитываем сумму и количество положительных элементов массива
 *
 * @params {array} array Массив чисел
 * @returns {Result} Сумма и количество элементов массива
 */
function sumOfPositive(array) {
    const positive = array.filter(function (item) {
        return item > 0;
    });
    return {
        count: positive.length,
        sum: positive.reduce(function (a, b) {
            return a + b;
        }, 0)
    };
}
