import React from "react";
import '../css/NewTask.css'
import { TasksContext } from "../TasksContext/TasksContext";
import { FaXmark } from "react-icons/fa6";


function NewTask () {
    const {setOpenModal, addNewTask, newTaskTitle, setNewTaskTitle} = React.useContext(TasksContext);
    return (
        <div className="blur">
            <div className="modal-container">
                <FaXmark onClick={() => setOpenModal(false)} className='cancel-new-task'></FaXmark>
                <input 
                value={newTaskTitle}
                onChange={(event) => setNewTaskTitle(event.target.value)}  
                placeholder="Nombre de la nueva tarea" 
                className="new-task-name"></input>
                <button 
                onClick={addNewTask}>Guardar</button>
            </div>
        </div>
    )
}

export { NewTask }