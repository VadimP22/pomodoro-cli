import TextComponent from "./text_component";
import {bgWhiteBright, blackBright, redBright, white} from "cli-color";
import {Format} from "cli-color/bare";
import Component from "./component";


let defaultValues = ["00:00", "05:00", "10:00", "15:00", "20:00", "25:00", "30:00"]


function initDefaultColor(index: number): Format
{
    let color: Format = redBright

    if (index == 0 || index == 4)
    {
        color = blackBright
    }

    if (index == 1 || index == 3)
    {
        color = white
    }

    if (index == 2)
    {
        color = bgWhiteBright.black
    }

    return color
}


export default class HorizontalSelector extends Component
{

    private textComponents: Array<TextComponent> = []
    private valuesAvailable: Array<string>

    private visibleColumns = 5;
    private spacesBetween = 1
    private oneColumnWith = 5

    private selectedValueIndex = 1

    constructor(x: number, y: number, step: number, values: Array<string> = defaultValues, initColor: Function = initDefaultColor) {
        super()
        this.x = x
        this.y = y
        this.valuesAvailable = values

        for (let i = 0; i < this.visibleColumns; i++)
        {
            let color: Format = initColor(i)

            let newComponent = new TextComponent(this.x + (i * (this.oneColumnWith + this.spacesBetween)), this.y, "12345", this.oneColumnWith, color)
            this.textComponents.push(newComponent)
        }
    }

    public draw()
    {
        let middle = ((this.visibleColumns - 1) / 2) + 1

        for (let i = 0; i < this.visibleColumns; i++)
        {
            let offset = middle - (this.visibleColumns) + i
            let index = this.selectedValueIndex + offset

            let text: string

            if (index < 0)
            {
                text = "-----"
            }
            else if (index >= this.valuesAvailable.length)
            {
                text = "-----"
            }
            else
            {
                text = this.valuesAvailable[index]
            }


            this.textComponents[i].setNewText(text)
        }

        for (let component of this.textComponents)
        {
            component.draw()
        }
    }

    public moveSelection(offset: number)
    {
        this.selectedValueIndex += offset
    }

    public getRealWidth(): number {
        let realWidth = 0

        for (let component of this.textComponents)
        {
            realWidth += component.getRealWidth() + this.spacesBetween
        }

        realWidth -= this.spacesBetween

        return  realWidth
    }

    public setNewPosition(x: number, y: number) {
        this.x = x
        this.y = y

        for (let i = 0; i < this.visibleColumns; i++)
        {
            let component = this.textComponents[i]
            let newX = this.x + (i * (this.oneColumnWith + this.spacesBetween))

            component.setNewPosition(newX, this.y)
        }

    }
}