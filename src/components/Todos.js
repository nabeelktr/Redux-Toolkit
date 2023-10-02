import React from 'react'
import { useSelector } from 'react-redux'
import {useDispatch} from 'react-redux'
import { removeTodo } from '../redux/features/todo/todoSlice'

const Todos = () => {
   const todos = useSelector(state  => state.todos)
   const dispatch = useDispatch()
  return (
    <>
    <div>Todos</div>
    {todos.map((todo)=>(
        <div key={todo.id}>{todo.text} &nbsp;
       <button 
       onClick={()=> dispatch(removeTodo(todo.id))}
       class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white text-xs dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      Delete
  </span>
</button>
        </div>
    ))}
    </>
  )
}

export default Todos