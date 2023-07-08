import { defineStore } from "pinia"
import { reactive } from "vue"

const globalStateName = 'globalState'
export default defineStore(globalStateName, () => {

  const state = reactive({})

  return {
    state
  }
})