/* eslint-disable react/prop-types */
import styles from "./Header.module.css";
import { FaLessThan, FaGreaterThan } from "react-icons/fa6";
import Modal from "../modal";
import { useState } from "react";
import uuid from "uuid-int";
import moment from "moment";

const Header = ({
  currentDate,
  handleNextMonth,
  handlePrevMonth,
  handleCreateEvent,
  handleCreateResource,
  resources,
}) => {
  const formattedDate = currentDate.format("MMMM YYYY").toUpperCase();
  const [isResourceModalOpen, setIsResourceModalOpen] = useState(false);
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);

  return (
    <>
      <header className={styles.wrapper}>
        <div>{formattedDate}</div>
        <div>
          <button onClick={() => setIsEventModalOpen(true)}>Add Event</button>
          <button onClick={() => setIsResourceModalOpen(true)}>
            Add Resource
          </button>
        </div>
        <div className={styles.btns}>
          <FaLessThan onClick={handlePrevMonth} />
          <span>Today</span>
          <FaGreaterThan onClick={handleNextMonth} />
        </div>
      </header>
      {isResourceModalOpen && (
        <ResourceModal
          handleCreateResource={handleCreateResource}
          onClose={() => setIsResourceModalOpen(false)}
        />
      )}
      {isEventModalOpen && (
        <EventModal
          handleCreateEvent={handleCreateEvent}
          resources={resources}
          onClose={() => setIsEventModalOpen(false)}
        />
      )}
    </>
  );
};

export default Header;

const EventModal = ({ handleCreateEvent, resources, onClose }) => {
  const [eventName, setEventName] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [selectedResource, setSelectedResource] = useState("");
  const generator = uuid(0);

  const eventCreateHandler = () => {
    if (!selectedResource) return alert("Please select a resource");
    const start = moment(startTime);
    const end = moment(endTime);

    if (end.isBefore(start)) {
      alert("End date cannot be earlier than start date.");
    }

    const newEvent = {
      id: generator.uuid(),
      title: eventName,
      start: moment(startTime).format("YYYY-MM-DDTHH:mm:ss"),
      end: moment(endTime).format("YYYY-MM-DDTHH:mm:ss"),
      resourceId: +selectedResource,
      level: 0,
    };
    console.log(newEvent);
    handleCreateEvent(newEvent);
    onClose();
  };

  return (
    <Modal title="Add Event" onSubmit={eventCreateHandler} onClose={onClose}>
      <div>
        <label>Event Name:</label>
        <input
          type="text"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
        />
      </div>
      <div>
        <label>Start Time:</label>
        <input
          type="datetime-local"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
        />
      </div>
      <div>
        <label>End Time:</label>
        <input
          type="datetime-local"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
        />
      </div>
      <div>
        <label>Resource:</label>
        <select
          value={selectedResource}
          onChange={(e) => setSelectedResource(e.target.value)}
        >
          <option value="">Select Resource</option>
          {resources.map((resource) => (
            <option key={resource.id} value={resource.id}>
              {resource.name}
            </option>
          ))}
        </select>
      </div>
    </Modal>
  );
};

const ResourceModal = ({ handleCreateResource, onClose }) => {
  const [resourceName, setResourceName] = useState("");
  const [color, setColor] = useState("");
  const generator = uuid(0);
  const resourceCreateHandler = () => {
    const newResource = {
      id: generator.uuid(),
      level: 0,
      name: resourceName,
      color: color,
    };
    handleCreateResource(newResource);
    onClose();
  };

  return (
    <Modal
      title="Add Resource"
      onSubmit={resourceCreateHandler}
      onClose={onClose}
    >
      <div>
        <label>Resource Name:</label>
        <input
          type="text"
          value={resourceName}
          onChange={(e) => setResourceName(e.target.value)}
        />
      </div>
      <div>
        <label>Set Color of Events:</label>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </div>
    </Modal>
  );
};
