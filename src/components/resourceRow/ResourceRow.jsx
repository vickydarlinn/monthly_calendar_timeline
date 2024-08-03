/* eslint-disable react/prop-types */
import Cell from "../cell";
import styles from "./ResourceRow.module.css";
import Event from "../event";

const ResourceRow = ({
  dates,
  events,
  onEventChange,
  resources,
  handleDeleteEvent,
}) => {
  const getEventsForResource = (resourceId) => {
    return events.filter((event) => event.resourceId === resourceId);
  };
  console.log(resources);
  return (
    <>
      {resources.map((resource) => (
        <div
          key={resource.id}
          className={styles.resourceRow}
          data-resource-id={`${resource.id}`}
        >
          <Cell
            title={resource.name}
            height={`${80 + resource.level * 50}px`}
            styleProps={{
              minWidth: "160px",
              position: "sticky",
              left: "0px",
              backgroundColor: "white",
              zIndex: 30,
            }}
          />
          <div className={styles.eventContainer}>
            {dates.map((date) => (
              <Cell
                key={date}
                height={`${80 + resource.level * 50}px`}
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
                color={resource.color}
                handleDeleteEvent={handleDeleteEvent}
              />
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default ResourceRow;
