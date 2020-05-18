/*eslint strict: ["error", "global"]*/

"use strict";

const text = {
    title: "Введите ID:",
    result: "Закодированный ID: ",
    error: "ID должен быть десятичным целым числом"
};
const timestamp = Date.now();
const cluster = 1;
const type = 2;
let id = Number(prompt(text.title, ""));

function timestampInSeconds(timestamp) {
    return Math.floor(timestamp / 1000);
}

function encodeID() {
    const timestamp16 = timestampInSeconds(timestamp).toString(16).padStart(8, "0");
    const cluster16 = cluster.toString(16).padStart(2, "0");
    const type16 = type.toString(16);
    const id16 = id.toString(16).padStart(6, "0");
    return timestamp16 + cluster16 + type16 + id16;
}

const message = (id > 0) ? text.result + encodeID().toUpperCase() : text.error;
alert(message);