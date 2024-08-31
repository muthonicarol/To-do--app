import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="w-full fixed top-0 left-0 ">
      <div className="flex justify-between items-center w-full px-4">
        <nav className="flex space-x-4">
          <Link to="/" className="text-green-500 font-bold  text-3xl hover:text-green-300 font-girly italic">
            Home
          </Link>
          <Link to="/completed" className="text-violet-700 font-bold  text-3xl hover:text-violet-500 font-girly italic">
            Completed Tasks
          </Link>
        </nav>
        <h1 className="text-7xl font-girly text-green-600 font-extrabold text-center mx-auto py-4">
          My  to-do-list!
        </h1>
      </div>
    </header>
  );
};

export default Navbar;
