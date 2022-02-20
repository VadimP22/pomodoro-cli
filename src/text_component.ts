import Component from "./component";
import {cursorTo} from "readline";
import {redBright, whiteBright} from "cli-color";
import {Format} from "cli-color/bare";

export type Alignment = "left" | "right" | "center"

export default class TextComponent extends Component
{
    private x: number
    private y: number
    private width: number
    private color: Format
    private text: string
    private alignment: Alignment
    private backgroundSymbol = "*"

    constructor(x: number, y: number, text: string, width: number = 10, color: Format = whiteBright, alignment: Alignment = "left") {
        super()
        this.x = x
        this.y = y
        this.width = width
        this.color = color
        this.text = text
        this.alignment = alignment
    }

    public draw() {
        if (this.alignment == "left")
        {
            this.drawLeftAligned()
        }
        else if (this.alignment == "right")
        {
            this.drawRightAligned()
        }
        else if(this.alignment == "center")
        {
            this.drawCenterAligned()
        }
    }

    drawTextSymbol(n: number)
    {
        if (n < this.text.length && n >= 0) {
            process.stdout.write(this.color(this.text[n]))
        } else
        {
            process.stdout.write(this.backgroundSymbol)
        }
    }

    drawLeftAligned()
    {
        for (let i = 0; i < this.width; i++)
        {
            cursorTo(process.stdout, this.x + i, this.y)
            this.drawTextSymbol(i)
        }
    }

    drawRightAligned()
    {
        let margin = this.width - this.text.length

        for (let i = this.width - 1; i >= 0; i--)
        {
            cursorTo(process.stdout, this.x + i, this.y)
            this.drawTextSymbol(i - margin)

        }
    }

    drawCenterAligned()
    {
        throw Error("Work in progress")
    }

    public setNewColor(color: Format)
    {
        this.color = color
    }

}