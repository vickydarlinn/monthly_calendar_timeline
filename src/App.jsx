import { useState, useEffect } from "react";
import Calendar from "./components/calendar";
import Header from "./components/header";
import moment from "moment";
import { events as initialEvents, resources as initialResources } from "./data";
import "./App.css";
import { assignEventLevels } from "./utils/levelChecker";

const App = () => {
  const [currentDate, setCurrentDate] = useState(moment());
  const [resources, setResources] = useState(initialResources);
  const [events, setEvents] = useState([]);
  useEffect(() => {
    // Try to load events from localStorage
    const storedEvents = localStorage.getItem("events");
    if (storedEvents) {
      setEvents(JSON.parse(storedEvents));
    } else {
      // If no events in localStorage, use initial events
      setEvents(initialEvents);
    }
  }, []);

  useEffect(() => {
    // Save events to localStorage whenever events change
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);
  useEffect(() => {
    const { events: leveledEvents, updatedResources } = assignEventLevels(
      events,
      resources
    );
    if (leveledEvents.length) {
      setEvents(leveledEvents);
      setResources(updatedResources);
    }
  }, [events]);
  console.log(events);

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

  return (
    <main className="main_wrapper">
      <Header
        currentDate={currentDate}
        handleNextMonth={handleNextMonth}
        handlePrevMonth={handlePrevMonth}
      />
      <Calendar
        currentDate={currentDate}
        events={events}
        onEventChange={handleEventChange}
        resources={resources}
      />
    </main>
  );
};

export default App;
