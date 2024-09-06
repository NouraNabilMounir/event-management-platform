import React from 'react';
import { useParams } from 'react-router-dom';
import { getEventById } from '../services/localStorageService';

const EventDetailPage = () => {
  const { id } = useParams();
  const event = getEventById(id);

  if (!event) {
    return <div className="container mx-auto p-4">Event not found</div>;
  }

  return (
    <div className="container mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">{event.name}</h1>
      <p className="text-gray-600 text-lg mb-2">Date: {event.date}</p>
      <p className="text-gray-600 text-lg mb-2">Location: {event.location}</p>
      <p className="text-gray-700 text-base">{event.description}</p>
    </div>
  );
}

export default EventDetailPage;