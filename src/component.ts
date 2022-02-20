export default class Component
{
    private _isActive: boolean = false

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

    public draw()
    {
        throw new Error("must be overrided")
    }
}
