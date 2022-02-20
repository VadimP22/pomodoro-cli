//imports
import {redBright, whiteBright} from "cli-color";
import TextComponent, {Alignment} from "./text_component";
import HorizontalSelector from "./horizontal_selector";
import Component from "./component";


//app class
class App
{
    constructor() {

    }

    run(): void
    {
        let selector = new HorizontalSelector(0, 6, 1)

        let leftOffset = (process.stdout.columns - selector.getRealWidth()) / 2
        leftOffset = Math.trunc(leftOffset)

        selector.setNewPosition(leftOffset, selector.getY())

        console.clear()
        selector.draw()
    }
}

//app instance
let app = new App()
app.run()