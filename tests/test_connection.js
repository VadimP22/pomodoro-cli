"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const net_1 = require("net");
let socket = (0, net_1.createConnection)(8099, "127.0.0.1");
socket.on("connect", onConnect);
socket.on("error", onError);
function onConnect() {
    socket.write('{"function": "notifyNow", "arguments": ["My notification", "Hello :)"]}');
    socket.end();
}
function onError(err) {
    console.log("Ошибка: ", err.toString());
}
