import React from 'react'
import '../css/TaskItem.css'
import { FaCheck } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";


function TaskItem ({text, completed, searchValue, completeTask, deleteTask}) {

  return(
    <div className={`container-tarea ${completed && "completed-container"} ${!text.toLowerCase().includes(searchValue.toLowerCase()) && "no-mostrar"}`}>
      <FaCheck className={`check ${completed && "checked"}`} onClick={completeTask}></FaCheck>
      <p className={`${completed && "completed-tarea"}`}>{text}</p>
      <button>
      <FaXmark onClick={deleteTask} className='cancel-tarea'></FaXmark>
      </button>
    </div>
  )
}

export {TaskItem}
