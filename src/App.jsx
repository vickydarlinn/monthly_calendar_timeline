import { useState } from "react";
import Calendar from "./components/calendar";
import Header from "./components/header";
import moment from "moment";
import { events } from "./data";
import "./App.css";

const App = () => {
  const [currentDate, setCurrentDate] = useState(moment());

  const handleNextMonth = () => {
    setCurrentDate((prevDate) => prevDate.clone().add(1, "months"));
  };

  const handlePrevMonth = () => {
    setCurrentDate((prevDate) => prevDate.clone().subtract(1, "months"));
  };

  return (
    <main className="main_wrapper">
      <Header
        currentDate={currentDate}
        handleNextMonth={handleNextMonth}
        handlePrevMonth={handlePrevMonth}
      />
      <Calendar currentDate={currentDate} events={events} />
    </main>
  );
};

export default App;
