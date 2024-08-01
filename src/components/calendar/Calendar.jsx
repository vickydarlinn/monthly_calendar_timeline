/* eslint-disable react/prop-types */
import moment from "moment";
import styles from "./Calendar.module.css";
import ResourceRow from "../resourceRow";
import Cell from "../cell";

const Calendar = ({ currentDate, events, onEventChange }) => {
  const startOfMonth = moment(currentDate).startOf("month");
  const endOfMonth = moment(currentDate).endOf("month");
  const dates = [];

  for (
    let date = startOfMonth;
    date.isBefore(endOfMonth);
    date.add(1, "days")
  ) {
    dates.push(date.clone());
  }

  return (
    <div className={styles.calendar}>
      <CalendarHeader dates={dates} />
      <CalendarBody
        dates={dates}
        events={events}
        onEventChange={onEventChange}
      />
    </div>
  );
};

export default Calendar;

const CalendarHeader = ({ dates }) => {
  return (
    <div className={styles.calendarHeader}>
      <Cell
        title=" "
        height="40px"
        width="160px"
        styleProps={{
          minWidth: "160px",
          position: "sticky",
          left: "0px",
          backgroundColor: "lightblue",
          zIndex: "10",
        }}
      />
      {dates.map((date) => (
        <Cell
          key={date}
          title={date.format("D ddd")}
          height="40px"
          width=""
          styleProps={{
            minWidth: "120px",
          }}
        />
      ))}
    </div>
  );
};

const CalendarBody = ({ dates, events, onEventChange }) => (
  <ResourceRow dates={dates} events={events} onEventChange={onEventChange} />
);
