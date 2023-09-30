import React from 'react'
import Todo from './Todo';
import { v4 as uuidv4 } from 'uuid';


function TodoList ({ todo }) {

  return (
    <>
      {todo.map(todo => {
        return <Todo key={uuidv4()} todo={todo} />
      })}
    </>
  )
}

export default TodoList