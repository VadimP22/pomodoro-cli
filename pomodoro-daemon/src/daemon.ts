import {blueBright, greenBright} from "cli-color";
import {Server, Socket} from "net";
import processRecievedObject from "./process_recieved_object";


let server = new Server()
let host = "127.0.0.1"
let port = 8099


server.listen(port, host, notify)
server.on("connection", onConnection)


function notify()
{
    console.log(blueBright("Server listening on port " + port + ", host " + host))
}


function onConnection(socket: Socket)
{
    console.log(blueBright("Connection Established"))
    socket.on("error", onSocketError)
    socket.on("data", onSocketData)
    socket.on("close", onSocketClose)
}


function onSocketError()
{
    console.log(greenBright("Socket error"))
}


function onSocketClose()
{
    console.log(greenBright("Socket closed"))
}


function onSocketData(data: string)
{
    let parsedObject: any

    console.log(greenBright("Data recieved:", data))
    try
    {
        parsedObject= JSON.parse(data)
        console.log(greenBright("Data successfully parsed"))
        processRecievedObject(parsedObject)
    }
    catch (e: any)
    {
        console.log(greenBright("Error:"), greenBright(e.toString()))
    }

}