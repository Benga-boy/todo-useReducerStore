import React from 'react'
import { addText, addTask } from '../state/action'
import { useAppContext } from '../hooks/useContext'


const Forms = () => {

  const { state: text, dispatch } = useAppContext()

  const handleInputChange = e => {
    dispatch(addText(e.target.value))
  }

  const handleTaskAdd = e => {
    e.preventDefault()
    dispatch(addTask(text))
    dispatch(addText(''))
  }


  console.log(text)



  return (
    <div>
      <form onSubmit={handleTaskAdd}>
        <input type="text" placeholder="please enter text" value={text.text} onChange={handleInputChange} />
        <button>Add Task</button>
      </form>
    </div>
  )

}

export default Forms
