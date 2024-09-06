import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import EventForm from '../components/EventForm';
import { getEventById, updateEvent } from '../services/localStorageService';

const EditEventPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = getEventById(id);

  const handleSubmit = (values, { resetForm }) => {
    updateEvent(id, values);
    resetForm();
    alert('Event updated successfully!');
    navigate('/');
  };

  if (!event) {
    return <div className="container mx-auto p-4">Event not found</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Edit Event</h1>
      <EventForm initialValues={event} onSubmit={handleSubmit} />
    </div>
  );
}

export default EditEventPage;