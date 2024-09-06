import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import EventList from './components/EventList';
import EventDetailPage from './pages/EventDetailPage';
import CreateEventPage from './pages/CreateEventPage';
import EditEventPage from './pages/EditEventPage';
import { getEvents } from './services/localStorageService';

const App = () => {
  const events = getEvents();

  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-6">
        <Routes>
          <Route path="/" element={<EventList events={events} />} />
          <Route path="/event/:id" element={<EventDetailPage />} />
          <Route path="/create-event" element={<CreateEventPage />} />
          <Route path="/edit-event/:id" element={<EditEventPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;