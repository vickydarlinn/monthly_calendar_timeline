import { useState, useEffect, useMemo } from "react";
import Calendar from "./components/calendar";
import Header from "./components/header";
import moment from "moment";
import { events as initialEvents, resources as initialResources } from "./data";
import "./App.css";
import { assignEventLevels } from "./utils/levelChecker";

const App = () => {
  const [currentDate, setCurrentDate] = useState(moment());
  const [resources, setResources] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const storedEvents = localStorage.getItem("events");
    const storedResources = localStorage.getItem("resources");

    if (storedEvents) {
      setEvents(JSON.parse(storedEvents));
    } else {
      setEvents(initialEvents);
    }

    if (storedResources) {
      setResources(JSON.parse(storedResources));
    } else {
      setResources(initialResources);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  useEffect(() => {
    localStorage.setItem("resources", JSON.stringify(resources));
  }, [resources]);

  const leveledData = useMemo(() => {
    return assignEventLevels(events, resources);
  }, [events, resources]);

  useEffect(() => {
    const { events: leveledEvents, updatedResources } = leveledData;
    if (JSON.stringify(leveledEvents) !== JSON.stringify(events)) {
      setEvents(leveledEvents);
    }
    if (JSON.stringify(updatedResources) !== JSON.stringify(resources)) {
      setResources(updatedResources);
    }
  }, [leveledData, events, resources]);

  const handleNextMonth = () => {
    setCurrentDate((prevDate) => prevDate.clone().add(1, "months"));
  };

  const handlePrevMonth = () => {
    setCurrentDate((prevDate) => prevDate.clone().subtract(1, "months"));
  };

  const handleEventChange = (updatedEvent) => {
    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event.id === updatedEvent.id ? updatedEvent : event
      )
    );
  };

  const handleCreateResource = (newResource) => {
    setResources((prev) => [...prev, newResource]);
  };

  const handleCreateEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };
  const handleDeleteEvent = (eventId) => {
    setEvents((prevEvents) =>
      prevEvents.filter((event) => event.id !== eventId)
    );
  };

  const filteredEvents = useMemo(() => {
    const startOfMonth = currentDate.clone().startOf("month");
    const endOfMonth = currentDate.clone().endOf("month");

    return events.filter((event) => {
      const eventDate = moment(event.date);
      return eventDate.isBetween(startOfMonth, endOfMonth, null, "[]");
    });
  }, [events, currentDate]);

  return (
    <main className="main_wrapper">
      <Header
        currentDate={currentDate}
        handleNextMonth={handleNextMonth}
        handlePrevMonth={handlePrevMonth}
        handleCreateResource={handleCreateResource}
        handleCreateEvent={handleCreateEvent}
        resources={resources}
        setCurrentDate={setCurrentDate}
      />
      <Calendar
        currentDate={currentDate}
        events={filteredEvents}
        onEventChange={handleEventChange}
        resources={resources}
        handleDeleteEvent={handleDeleteEvent}
      />
    </main>
  );
};

export default App;
