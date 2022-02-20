import {createConnection, Socket} from "net";


let socket = createConnection(8099, "127.0.0.1")
socket.on("connect", onConnect)
socket.on("error", onError)

function onConnect()
{
    socket.write("This is the test message. 1234567890")
    socket.end()
}

function onError(err: Error)
{
    console.log("Ошибка: ", err.toString())
}

