import React from 'react';
import '../css/TaskSearch.css';
import { TasksContext } from '../TasksContext/TasksContext';

function TaskSearch () {

  const {searchValue, setSearchValue} = React.useContext(TasksContext);

  return (
    <input 
    value={searchValue}
    onChange={(event) => setSearchValue(event.target.value)} 
    className='searchBar' 
    placeholder="Buscar tarea...">

    </input>
  )
}

export { TaskSearch };