/* eslint-disable react/prop-types */
import moment from "moment";
import styles from "./Calendar.module.css";
import ResourceRow from "../resourceRow";
import Cell from "../cell";

const Calendar = ({ currentDate, events, onEventChange, resources }) => {
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
    <div className={styles.calendar} data-calendar="calendar">
      <CalendarHeader dates={dates} />
      <CalendarBody
        dates={dates}
        events={events}
        onEventChange={onEventChange}
        resources={resources}
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
          backgroundColor: "white",
          zIndex: 55,
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
            backgroundColor: "white",
          }}
        />
      ))}
    </div>
  );
};

const CalendarBody = ({ dates, events, onEventChange, resources }) => (
  <ResourceRow
    dates={dates}
    events={events}
    onEventChange={onEventChange}
    resources={resources}
  />
);
