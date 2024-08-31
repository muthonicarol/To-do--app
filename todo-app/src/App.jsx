import React from "react";
import { TaskProvider } from "./context/TaskContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import CompletedTasks from "./components/CompletedTasks";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <TaskProvider>
      <Router>
        <div className="min-h-screen flex flex-col items-center justify-center bg-pink-300 p-4">
          <Navbar />
          <Routes>
            <Route path="/" element={<TaskList />} />
            <Route path="/completed" element={<CompletedTasks />} />
          </Routes>
          <AddTask />
        </div>
      </Router>
    </TaskProvider>
  );
};

export default App;
