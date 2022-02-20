import {blueBright, redBright} from "cli-color";
import {Server, Socket} from "net";
import * as buffer from "buffer";

let server = new Server()

server.listen(8099,"127.0.0.1", notify)
server.on("connection", onConnection)

function notify()
{
    console.log(blueBright("Сервер запущен"))
}

function onConnection(socket: Socket)
{
    console.log(blueBright("Соединение установлено"))
    socket.on("error", onSocketError)
    socket.on("data", onSocketData)
}

function onSocketError()
{
    console.log(redBright("Ошибка"))
}

function onSocketClose()
{
    console.log(redBright("Сокет закрыт"))
}

function onSocketData(data: string)
{
    console.log(redBright("Пришли данные:", data))
}