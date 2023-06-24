class HandlerLocalStorage {
  createIfNotExist(key: string, value: object | undefined) {

    if(!localStorage.getItem(key)) {
      localStorage.setItem(key, JSON.stringify(value))
    }
  }

  getStorageByKey(key: string) {
    const value = localStorage.getItem(key)

    if(value){
      return JSON.parse(value)
    }
  }

  update(key: string, newValue: object | undefined) {
    localStorage.setItem(key, JSON.stringify(newValue))
  }
}

export default HandlerLocalStorage