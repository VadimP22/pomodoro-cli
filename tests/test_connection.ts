import {createConnection, Socket} from "net";


let socket = createConnection(8099, "127.0.0.1")
socket.on("connect", onConnect)
socket.on("error", onError)

function onConnect()
{
    socket.write('{"function": "notifyNow", "arguments": ["My notification", "Hello :)"]}')
    socket.end()
}

function onError(err: Error)
{
    console.log("Ошибка: ", err.toString())
}

