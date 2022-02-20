export default class Component
{
    private _isActive: boolean = false
    protected x: number = 0
    protected y: number = 0

    public setActive(newValue: boolean = true)
    {
        this._isActive = newValue
    }

    public isActive(): boolean
    {
        return this._isActive
    }

    public getRealWidth(): number
    {
        throw new Error("must be orverrided")
    }

    public setNewPosition(x: number, y: number)
    {
        this.x = x
        this.y = y
    }

    public getX()
    {
        return this.x
    }

    public getY()
    {
        return this.y
    }

    public draw()
    {
        throw new Error("must be overrided")
    }
}
