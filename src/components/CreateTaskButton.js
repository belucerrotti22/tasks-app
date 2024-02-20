import React from 'react'
import '../css/CreateTaskButton.css'
import { TasksContext } from '../TasksContext/TasksContext';


function CreateTaskButton () {
  const {setOpenModal} = React.useContext(TasksContext);
    return (
      <button onClick={() => setOpenModal(true)} className='button-add'>Nueva tarea</button>
    )
}

export {CreateTaskButton}