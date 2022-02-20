//imports
import {redBright, whiteBright} from "cli-color";
import TextComponent, {Alignment} from "./text_component";


//app class
class App
{
    constructor() {

    }

    run(): void
    {
        console.clear()
        console.log(redBright("hellofffffrightpart"))
        let text = new TextComponent(4, 4,"ghtpart", 10, whiteBright, "center")
        text.draw()
    }
}


//app instance
let app = new App()
app.run()