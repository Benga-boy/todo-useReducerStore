import React, { Fragment, useReducer } from 'react'
import Context from './hooks/context'
import reducer, { initialState } from './state/reducer'
import Form from './components/Forms'
import TaskContainer from './components/TaskContainer'

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)




  return (
    <Context.Provider value={{ state, dispatch }}>
      <Fragment>
        <h1>Hello World</h1>
        <Form/>
        <TaskContainer />
      </Fragment>
    </Context.Provider>
  )
}

export default App
