import React from 'react'
import '../css/TasksCounter.css'
import { TasksContext } from '../TasksContext/TasksContext';

function TasksCounter () {

  const {completedTasks, totalTasks} = React.useContext(TasksContext);

  if(totalTasks === 0 ){
    return (
      <h1>
        ¡Agrega nuevas tareas!
      </h1>
    )
  }else if (completedTasks === totalTasks){
    return (
      <h1>
        ¡Haz completado todas tus tareas!
      </h1>
    )
  }else {
    return(
      <h1>
        Hiciste {completedTasks} de {totalTasks} tareas
      </h1>
    )
  }
}

export {TasksCounter}

