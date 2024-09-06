import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteEvent } from '../services/localStorageService';
import { PencilSquareIcon, TrashIcon, EyeIcon, UserPlusIcon, CheckIcon } from '@heroicons/react/24/outline';

const EventList = ({ events }) => {
  const [registeredEvents, setRegisteredEvents] = useState({});

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      deleteEvent(id);
      window.location.reload();
    }
  };

  const handleRegister = (id) => {
    setRegisteredEvents(prevState => ({
      ...prevState,
      [id]: true
    }));
  };

  return (
    <div className="space-y-6">
      {events.map(event => (
        <div key={event.id} className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden w-2/5">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">{event.name}</h2>
              <div className="flex space-x-4">
                <Link to={`/event/${event.id}`} className="text-blue-600 hover:text-blue-800 flex items-center space-x-1">
                  <EyeIcon className="h-5 w-5" aria-hidden="true" />
                </Link>
                <Link to={`/edit-event/${event.id}`} className="text-blue-600 hover:text-blue-800 flex items-center space-x-1">
                  <PencilSquareIcon className="h-5 w-5" aria-hidden="true" />
                </Link>
                <button 
                  onClick={() => handleDelete(event.id)} 
                  className="text-red-600 hover:text-red-800 flex items-center space-x-1"
                >
                  <TrashIcon className="h-5 w-5" aria-hidden="true" />
                </button>
                <button 
                  onClick={() => handleRegister(event.id)} 
                  className="flex items-center space-x-1"
                >
                  {registeredEvents[event.id] ? (
                    <CheckIcon className="h-5 w-5 text-green-600" aria-hidden="true" />
                  ) : (
                    <UserPlusIcon className="h-5 w-5 text-green-600 hover:text-green-800" aria-hidden="true" />
                  )}
                  <span className={registeredEvents[event.id] ? "text-green-600" : "text-green-600 hover:text-green-800"}>
                    {registeredEvents[event.id] ? "Registered" : "Register"}
                  </span>
                </button>
              </div>
            </div>
            <p className="text-gray-600 mt-2">{event.date}</p>
            <p className="text-gray-600 mt-2">{event.location}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EventList;
