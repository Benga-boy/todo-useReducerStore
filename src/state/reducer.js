import { ADD_TEXT, ADD_TASK } from './types'

export const initialState = { text: '', tasks: [] }

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TEXT:
      return {
        ...state,
        text: action.text
      }
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.task]
      }
    default:
      return state
  }
}


export default reducer