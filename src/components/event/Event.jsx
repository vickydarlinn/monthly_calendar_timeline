/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import interact from "interactjs";
import moment from "moment";

import styles from "./Event.module.css";

const Event = ({ event: eventProp, dates, onEventChange }) => {
  const eventRef = useRef(null);
  useEffect(() => {
    const target = eventRef.current;

    // Reset the transform and data-x on re-render
    target.style.transform = "translateX(0px)";
    target.dataset.x = "0";

    const interactable = interact(eventRef.current).resizable({
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
        end(event) {
          const target = event.target;
          const x = parseFloat(target.dataset.x) || 0;
          const width = parseFloat(target.dataset.width) || 0;

          console.log(
            `Resize ended. New width: ${width}px, New X position: ${x}px`
          );

          const updatedStart = updateTimestamp(x);
          const updatedEnd = updateTimestamp(x + width);

          console.log(`Updated start: ${updatedStart}`);
          console.log(`Updated end: ${updatedEnd}`);

          const updatedEvent = {
            ...eventProp,
            start: updatedStart.format("YYYY-MM-DDTHH:mm:ss"),
            end: updatedEnd.format("YYYY-MM-DDTHH:mm:ss"),
          };
          onEventChange(updatedEvent);
        },
      },
    });

    return () => interactable.unset();
  }, [eventProp, onEventChange]);

  console.log(eventProp);

  function updateTimestamp(position) {
    const startDate = moment(eventProp.start);
    const updatedDate = startDate.add(position / 5, "hours");
    return updatedDate;
  }

  const leftPosition = moment(eventProp.start).diff(dates[0], "hours") * 5;
  console.log(leftPosition);

  const width = moment(eventProp.end).diff(eventProp.start, "hours") * 5;
  console.log(width);

  return (
    <div
      ref={eventRef}
      className={styles.event}
      style={{
        position: "absolute",
        left: `${leftPosition}px`,
        width: `${width}px`,
        backgroundColor: eventProp.color,
        height: "40px",
        zIndex: 5,
      }}
      data-x="0"
      data-width={`${width}`}
    >
      {eventProp.title}
    </div>
  );
};

export default Event;
