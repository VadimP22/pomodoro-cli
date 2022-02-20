//imports
import {redBright, whiteBright} from "cli-color";
import TextComponent, {Alignment} from "./text_component";
import HorizontalSelector from "./horizontal_selector";


//app class
class App
{
    constructor() {

    }

    run(): void
    {
        console.clear()
        console.log(redBright("hellofffffrightpart"))
        let selector = new HorizontalSelector(2, 2, 1)
        selector.draw()
    }
}


//app instance
let app = new App()
app.run()