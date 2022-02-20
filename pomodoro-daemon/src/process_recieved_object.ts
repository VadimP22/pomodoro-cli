import "node-notifier"
import {notify} from "node-notifier";


interface RemoteCall
{
    function: string
    arguments: Array<any>
}


export default function processRecievedObject(remoteCall: RemoteCall)
{
    console.log("function:", remoteCall.function)
    console.log("arguments", remoteCall.arguments)

    if (remoteCall.function === "testNotify")
    {
        notify("testNotification")
    }

    if (remoteCall.function === "stopDaemon")
    {
        process.exit()
    }

    if(remoteCall.function === "notifyNow")
    {
        let title = remoteCall.arguments[0]
        let message = remoteCall.arguments[1]

        notify({
            title,
            message,
        })
    }
}