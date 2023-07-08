import { defineStore } from "pinia"
import { reactive } from "vue"
import { type IGlobalState } from "@/interfaces"

import { HandleDate, HandleStorage } from "@/utils"
const handleDate = new HandleDate()

const globalStateName = 'globalState'
export default defineStore(globalStateName, () => {

  const state: IGlobalState[] = reactive({})

  return {
    state
  }
})