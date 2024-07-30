import moment from "moment";
import styles from "./Calendar.module.css";
import ResourceRow from "../resourceRow";
import Cell from "../cell";

const Calendar = ({ currentDate }) => {
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
      <CalendarBody dates={dates} />
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
        styleProps={{
          minWidth: "120px",
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
          styleProps={{
            minWidth: "100px",
          }}
        />
      ))}
    </div>
  );
};

const CalendarBody = ({ dates }) => <ResourceRow dates={dates} />;
