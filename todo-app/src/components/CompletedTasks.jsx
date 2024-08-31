import React from 'react';
import { useTasks } from '../context/TaskContext';

const CompletedTasks = () => {
  const { tasks } = useTasks();


  const completedTasks = tasks.filter(task => task.completed);

  return (
    <div className="p-4 bg-purple-100 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-purple-700 mb-4">Completed Tasks</h2>
      {completedTasks.length === 0 ? (
        <p className="text-gray-500">No completed tasks yet.</p>
      ) : (
        <ul>
          {completedTasks.map(task => (
            <li
              key={task.id}
              className="flex items-center justify-between p-2 mb-2 bg-purple-200 rounded-lg"
            >
              <span className="line-through text-gray-500">{task.title}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CompletedTasks;
