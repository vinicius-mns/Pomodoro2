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

  update(key: string, newValue: object | undefined) {
    localStorage.setItem(key, JSON.stringify(newValue))
  }

  delete(key: string) {
    localStorage.removeItem(key)
  }

  clearLocalStorage() {
    localStorage.clear()
  }
}

export default HandlerLocalStorage