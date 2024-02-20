import React from 'react'
import { AppUI } from './AppUI';
import { TasksProvider } from './TasksContext/TasksContext';

function App() {
  return (
    <TasksProvider>
        <AppUI/>  
    </TasksProvider>
  );
}

export default App;