import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white hover:text-blue-200 transition-colors">Event Manager</Link>
        <Link to="/create-event" className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-md shadow transition-colors">Create Event</Link>
      </div>
    </nav>
  );
}

export default Navbar;