/* eslint-disable react/prop-types */
import Cell from "../cell";
import { resources } from "../../data";
import styles from "./ResourceRow.module.css";
import Event from "../event";

const ResourceRow = ({ dates, events, onEventChange }) => {
  const getEventsForResource = (resourceId) => {
    return events.filter((event) => event.resourceId === resourceId);
  };

  return (
    <>
      {resources.map((resource) => (
        <div key={resource.id} className={styles.resourceRow}>
          <Cell
            title={resource.name}
            styleProps={{
              minWidth: "160px",
              position: "sticky",
              left: "0px",
              backgroundColor: "lightblue",
            }}
          />
          <div className={styles.eventContainer}>
            {dates.map((date) => (
              <Cell
                key={date}
                title=""
                styleProps={{
                  minWidth: "120px",
                }}
              />
            ))}
            {getEventsForResource(resource.id).map((event) => (
              <Event
                key={event.id}
                event={event}
                dates={dates}
                onEventChange={onEventChange}
              />
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default ResourceRow;
