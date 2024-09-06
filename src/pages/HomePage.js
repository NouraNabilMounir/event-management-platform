import React, { useEffect, useState } from 'react';
import EventList from '../components/EventList';
import { getEvents } from '../services/localStorageService';

const HomePage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents(getEvents());
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Upcoming Events</h1>
      <EventList events={events} />
    </div>
  );
}

export default HomePage;
