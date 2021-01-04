import React from 'react';
import Task from './task.js'

export default({ tasks, markTaskDone }) => {
    return (
        <ul className="list-group">
            {tasks.map(task => (
                <li key={task.id} className="list-group-item">
                    <Task task={task} />
                </li>
            ))}
        </ul>
    );
}