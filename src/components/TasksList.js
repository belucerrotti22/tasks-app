import React from 'react'
import '../css/TasksList.css'

function TasksList (props) {
    return (
      <div className='lista-tareas'>
        {props.children}
      </div>
    )
}

export {TasksList}