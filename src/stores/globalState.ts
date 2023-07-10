import { defineStore } from "pinia"
import { reactive } from "vue"
import { type IGlobalState } from "@/interfaces"

import { HandleDate, HandleStorage } from "@/utils"
const handleDate = new HandleDate()

const globalStateName = 'globalState'
export default defineStore(globalStateName, () => {

  const initState = (): IGlobalState[] => {
    return handleDate.daysOfWeek.map((day) => ({folderName: day, folder: [{name: day, time: 100}]}))
  }

  const handleStorage = new HandleStorage(globalStateName, initState())

  const state: IGlobalState[] = reactive(handleStorage.read as IGlobalState[])

  const getPaths = state.map(({folderName}) => folderName)

  return {
    getPaths,
  }
})