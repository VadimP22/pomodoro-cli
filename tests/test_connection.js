"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const net_1 = require("net");
let socket = (0, net_1.createConnection)(8099, "127.0.0.1");
socket.on("connect", onConnect);
socket.on("error", onError);
function onConnect() {
    socket.write("This is the test message. 1234567890");
    socket.end();
}
function onError(err) {
    console.log("Ошибка: ", err.toString());
}
