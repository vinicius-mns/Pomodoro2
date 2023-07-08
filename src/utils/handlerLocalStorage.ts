export class HandlerStorage<T> {
  
  constructor(private _key: string, private _defaultValue: T | T[]){
    this._init()
  }

  private _init(): void {
    if(!localStorage.getItem(this._key)) {
      localStorage.setItem(this._key, JSON.stringify(this._defaultValue))
    }
  }

  public get read (): T | T[] {
    return JSON.parse(localStorage.getItem(this._key) as string)
  }

  public update (newValue: T | T[]): void {
    localStorage.setItem(this._key, JSON.stringify(newValue))
  }

  public updateAndReturn (newValue: T | T[]): T | T[] {
    this.update(newValue)
    return this.read
  }

  clearLocalStorage() {
    localStorage.clear()
  }
}

export default HandlerLocalStorage