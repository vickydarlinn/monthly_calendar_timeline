import React, { useState } from "react";
import ResourceRow from "../resourceRow";
import moment from "moment";
import styles from "./Calendar.module.css";
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
    <div>
      <div className={styles.calendarHeader}>
        <Cell title=" " height="40px" minWidth="120px" />

        {dates.map((date) => (
          <Cell
            key={date}
            title={date.format("D ddd")}
            height="40px"
            minWidth="100px"
          />
        ))}
      </div>
      <ResourceRow />
    </div>
  );
};

export default Calendar;
