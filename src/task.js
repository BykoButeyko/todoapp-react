import React from 'react';
import taskList from './taskList';

export default({ task }) => {
    return (
        <p>
            {task.description}
        </p>
    );
}