class HandlerLocalStorage {
  createIfNotExist(key: string, value: object | undefined) {

    if(!localStorage.getItem(key)) {
      localStorage.setItem(key, JSON.stringify(value))
    }
  }
}

export default HandlerLocalStorage