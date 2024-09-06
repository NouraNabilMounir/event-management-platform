export const getEvents = () => {
  const events = localStorage.getItem('events');
  return events ? JSON.parse(events) : [];
};

export const getEventById = (id) => {
  const events = getEvents();
  return events.find(event => event.id === id);
};

export const saveEvent = (event) => {
  const events = getEvents();
  const newEvent = { ...event, id: new Date().toISOString() };
  events.push(newEvent);
  localStorage.setItem('events', JSON.stringify(events));
};

export const updateEvent = (id, updatedEvent) => {
  const events = getEvents();
  const index = events.findIndex(event => event.id === id);
  if (index > -1) {
    events[index] = { ...updatedEvent, id };
    localStorage.setItem('events', JSON.stringify(events));
  }
};

export const deleteEvent = (id) => {
  const events = getEvents();
  const filteredEvents = events.filter(event => event.id !== id);
  localStorage.setItem('events', JSON.stringify(filteredEvents));
};