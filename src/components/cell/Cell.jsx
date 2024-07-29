import React from "react";
import styles from "./Cell.module.css";

const Cell = ({
  height = "80px",
  width = "80px",
  title = null,
  isBold = false,
}) => {
  return (
    <div
      className={styles.wrapper}
      style={{
        height,
        width,
        fontWeight: isBold ? "bold" : "regular",
      }}
    >
      {title.length && title}
    </div>
  );
};

export default Cell;
