import { type ITask } from "."

export interface IGlobalState {
  folderName: string,
  folder: ITask[]
}