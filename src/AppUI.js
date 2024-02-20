import React from 'react';
import { TasksCounter } from './components/TasksCounter';
import { TaskSearch } from './components/TaskSearch';
import { CreateTaskButton } from './components/CreateTaskButton';
import { TaskItem } from './components/TaskItem';
import { TasksList } from './components/TasksList';
import { MainContainer } from './components/MainContainer';
import { LoadingItem } from "./components/LoadingItem";
import { ErrorItem } from "./components/ErrorItem";
import { TasksContext } from './TasksContext/TasksContext';
import { Modal } from './Modal';

function AppUI () {

  const {loading, 
        error, 
        openModal,
        tasks, 
        searchValue, 
        completeTask, 
        deleteTask} = React.useContext(TasksContext);

  return(
    <React.Fragment>

    <MainContainer>

      <TasksCounter/>

      <TaskSearch/>

      <TasksList>
        {loading && <LoadingItem/>}
        {error && <ErrorItem/>}
        {tasks.map(task => (
          <TaskItem 
          key={task.text} 
          text={task.text} 
          completed={task.completed} 
          searchValue={searchValue}
          completeTask = {() => completeTask(task.text, task.completed)}
          deleteTask = {() => deleteTask(task.text)} />))} 
      </TasksList>

      <CreateTaskButton/>

      {openModal && <Modal/>}

    </MainContainer>

  </React.Fragment>
  );
}

export { AppUI };