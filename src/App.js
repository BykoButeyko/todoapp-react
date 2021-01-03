import React, { useState } from 'react';
import TaskList from './taskList.js';
import NewTask from './newTask.js';

function App() {
  const [tasks, setTasks] = useState([]);
  const [nextId, setNextId] = useState(0);
  
  const createTask = description => {
    setTasks(tasks => ([...tasks, {id: nextId, description, done: false}]));
    setNextId(nextId + 1);
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="jumbotron">
            <h1 className="display-4">ToDo App</h1>
          </div>
          <NewTask createTask={createTask} />
          <br />
          <TaskList tasks={tasks} />
        </div>
      </div>
    </div>
  );
};

export default App;
