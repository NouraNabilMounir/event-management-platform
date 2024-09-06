import React from 'react';
import EventList from '../components/EventList';
import { getRegisteredEvents } from '../services/localStorageService';

const RegisteredEventsPage = () => {
  const registeredEvents = getRegisteredEvents();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Registered Events</h1>
      {registeredEvents.length > 0 ? (
        <EventList events={registeredEvents} />
      ) : (
        <p className="text-gray-600">You have not registered for any events yet.</p>
      )}
    </div>
  );
}

export default RegisteredEventsPage;