import React, { useState } from "react";
import { useTasks } from "../context/TaskContext";

const TaskItem = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);
  const { dispatch } = useTasks();

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    dispatch({ type: "EDIT_TASK", payload: { id: task.id, title: newTitle } });
    setIsEditing(false);
  };

  return (
    <div className="flex items-center font-girly font-bold text-2xl justify-between p-4 mb-2 bg-pink-100 rounded-lg shadow-md">
      {isEditing ? (
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className="p-2 rounded-lg w-48 border border-pink-300   focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
      ) : (
        <span className={`flex-grow ${task.completed ? 'line-through text-blue-500' : ''}`}>
          {task.title}
        </span>
      )}
      <div className="flex space-x-2">
        {isEditing ? (
          <button onClick={handleSave} className="bg-purple-300 font-bold text-2xl text-white font-girly py-1 px-3 rounded-lg shadow-md hover:bg-purple-400">
            Save
          </button>
        ) : (
          <button onClick={handleEdit} className="bg-purple-400 font-bold text-2xl text-black font-girly py-1 px-3 rounded-lg shadow-md hover:bg-purple-300">
            Edit
          </button>
        )}
        <button
          onClick={() => dispatch({ type: "TOGGLE_TASK", payload: task.id })}
          className={`bg-teal-300  font-bold text-2xl font-girly text-black py-1 px-3 rounded-lg shadow-md hover:bg-teal-400 ${
            task.completed ? 'bg-green-300' : 'bg-blue-300'
          }`}
        >
          {task.completed ? "Undo" : "Complete"}
        </button>
        <button
          onClick={() => dispatch({ type: "DELETE_TASK", payload: task.id })}
          className="bg-yellow-300 font-bold text-2xl font-girly text-black py-1 px-3 rounded-lg shadow-md hover:bg-yellow-400"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
