import React from 'react'
import { useAppContext } from '../hooks/useContext'

const TaskContainer = () => {

  const { state: { tasks } } = useAppContext()

  console.log('tasks : ', tasks)

  return (
    <div>
      {
        tasks.map(task => <p key={task.id}>{task.text.text}</p>)
      }
    </div>
  )
}

export default TaskContainer
