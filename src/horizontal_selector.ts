import TextComponent from "./text_component";
import {bgWhiteBright, blackBright, redBright, white} from "cli-color";
import {Format} from "cli-color/bare";


export default class HorizontalSelector
{
    private x: number
    private y: number

    private textComponents: Array<TextComponent> = []
    private valuesAvailable = ["00:00", "05:00", "10:00", "15:00", "20:00", "25:00", "30:00"]

    private visibleColumns: number = 5;
    private spacesBetween = 1
    private oneColumnWith = 5

    private selectedValueIndex = 3

    constructor(x: number, y: number, step: number) {
        this.x = x
        this.y = y

        for (let i = 0; i < this.visibleColumns; i++)
        {
            let color: Format = redBright

            if (i == 0 || i == 4)
            {
                color = blackBright
            }

            if (i == 1 || i == 3)
            {
                color = white
            }

            if (i == 2)
            {
                color = bgWhiteBright.black
            }

            let newComponent = new TextComponent(this.x + (i * (this.oneColumnWith + this.spacesBetween)), this.y, "12345", this.oneColumnWith, color)
            this.textComponents.push(newComponent)
        }
    }

    public draw()
    {
        for (let i = 0; i < this.visibleColumns; i++)
        {
            //TODO
        }

        for (let component of this.textComponents)
        {
            component.draw()
        }
    }
}