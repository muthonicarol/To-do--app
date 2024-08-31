import React, { useState } from "react";
import { useTasks } from "../context/TaskContext";

const AddTask = () => {
  const [title, setTitle] = useState("");
  const { dispatch } = useTasks();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "") return;

    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };

    dispatch({ type: "ADD_TASK", payload: newTask });
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex mt-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new task"
        className="p-2 rounded-lg w-64 border border-pink-300 font-girly text-3xl focus:outline-none focus:ring-2 focus:ring-pink-500"
      />
      <button
        type="submit"
        className="ml-2 bg-pink-500 font-girly text-white py-2 px-4  text-3xl rounded-lg shadow-md hover:bg-pink-600"
      >
        Add Task
      </button>
    </form>
  );
};

export default AddTask;
