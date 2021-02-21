import { ADD_TEXT, ADD_TASK } from './types'
import { v4 as uuidv4 } from 'uuid'

export const addText = text => {
  return {
    type: ADD_TEXT,
    text
  }
}

export const addTask = text => {
  return {
    type: ADD_TASK,
    task: {
      id: uuidv4(),
      text,
      isComplete: false
    }
  }
}