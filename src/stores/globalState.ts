import { defineStore } from "pinia"
import { reactive } from "vue"
import { type IGlobalState } from "@/interfaces"

const globalStateName = 'globalState'
export default defineStore(globalStateName, () => {

  const state: IGlobalState[] = reactive({})

  return {
    state
  }
})