import React from 'react';
import EventForm from '../components/EventForm';
import { saveEvent } from '../services/localStorageService';

const CreateEventPage = () => {
  const handleSubmit = (values, { resetForm }) => {
    saveEvent(values);
    resetForm();
    alert('Event created successfully!');
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Create New Event</h1>
      <EventForm initialValues={{ name: '', date: '', location: '', description: '' }} onSubmit={handleSubmit} />
    </div>
  );
}

export default CreateEventPage;