import styles from "./Cell.module.css";

const Cell = ({
  height = "80px",
  width = "80px",
  title = null,
  styleProps = {},
}) => {
  return (
    <div
      className={styles.wrapper}
      style={{
        height,
        width,
        ...styleProps,
      }}
    >
      {title}
    </div>
  );
};

export default Cell;
