/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import interact from "interactjs";
import moment from "moment";
import styles from "./Event.module.css";

const Event = ({ event, dates }) => {
  const eventRef = useRef(null);

  useEffect(() => {
    interact(eventRef.current).resizable({
      edges: { left: true, right: true, bottom: false, top: false },
      listeners: {
        move(event) {
          const target = event.target;
          let x = parseFloat(target.dataset.x) || 0;
          let width = parseFloat(target.dataset.width) || 0;

          x += event.deltaRect.left;
          width = event.rect.width;

          // Update the element's style
          target.style.width = `${width}px`;
          target.style.transform = `translateX(${x}px)`;

          // Update the data attributes
          target.dataset.x = x;
          target.dataset.width = width;
        },
      },
    });
  }, []);

  const leftPosition = moment(event.start).diff(dates[0], "days") * 100; // Assuming each day is 100px wide
  const width = moment(event.end).diff(moment(event.start), "hours") * 4; // Assuming each hour is 4px wide

  return (
    <div
      ref={eventRef}
      className={styles.event}
      style={{
        position: "absolute",
        left: `${leftPosition}px`,
        width: `${width}px`,
        backgroundColor: event.color,
        height: "40px",
        zIndex: 5,
        transform: "translateX(0px)",
      }}
      data-x="0"
      data-width={`${width}`}
    >
      {event.title}
    </div>
  );
};

export default Event;
