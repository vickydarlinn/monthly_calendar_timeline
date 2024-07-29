import Cell from "../cell";
import { resources } from "../../data";
import styles from "./ResourceRow.module.css";

const ResourceRow = () => {
  return (
    <div className={styles.wrapper}>
      {resources.map((resource) => (
        <Cell key={resource.id} title={resource.name} width="100%" />
      ))}
    </div>
  );
};

export default ResourceRow;
