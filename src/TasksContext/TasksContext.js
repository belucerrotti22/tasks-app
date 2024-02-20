import React from "react";
import { useLocalStorage } from "./useLocalStorage"; 


const TasksContext = React.createContext();

function TasksProvider({children}){

    const {item: tasks, 
        saveChanges,
        loading,
        error} = useLocalStorage("TAREAS", []);
    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);
    const [newTaskTitle, setNewTaskTitle] = React.useState('');

    let completedTasks = tasks.filter(tarea => tarea.completed).length;
    let totalTasks = tasks.length;

    const deleteTask = (text) => {
        let newTasks = tasks.filter(tarea => tarea.text !== text);
        saveChanges(newTasks);
    };

    const completeTask = (text, completed) => {
        let newTasks = tasks.map(tarea => {
        if (tarea.text === text) {
            return {text: text, completed: !completed };
        }
        return tarea;
        })
        saveChanges(newTasks);
    };

    const addNewTask = () => {
        let newTask = { text: newTaskTitle, completed: false };
        let newTasks = [...tasks, newTask];
        setNewTaskTitle('');
        saveChanges(newTasks);
        setOpenModal(false);
    }

    return (<TasksContext.Provider value={{completedTasks, 
                                            totalTasks, 
                                            searchValue, 
                                            setSearchValue, 
                                            tasks, 
                                            completeTask, 
                                            deleteTask, 
                                            loading, 
                                            error, 
                                            openModal,
                                            setOpenModal,
                                            addNewTask,
                                            newTaskTitle,
                                            setNewTaskTitle}}>
                {children}
            </TasksContext.Provider>)
}

export { TasksContext, TasksProvider }