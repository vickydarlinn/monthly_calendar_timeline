import Cell from "../cell";
import { resources } from "../../data";
import styles from "./ResourceRow.module.css";

const ResourceRow = ({ dates }) => {
  return (
    <>
      {resources.map((resource) => (
        <div key={resource.id} className={styles.resourceRow}>
          <Cell
            title={resource.name}
            styleProps={{
              minWidth: "120px",
              position: "sticky",
              left: "0px",
              backgroundColor: "lightblue",
            }}
          />
          {dates.map((date) => (
            <Cell
              key={date}
              title={resource.name.split(" ")[1] + " " + date.format("D ")}
              styleProps={{
                minWidth: "100px",
              }}
            />
          ))}
        </div>
      ))}
    </>
  );
};

export default ResourceRow;
