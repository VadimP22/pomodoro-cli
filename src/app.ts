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
        let selector = new HorizontalSelector(2, 2, 1)
        console.clear()
        selector.draw()
    }
}


//app instance
let app = new App()
app.run()