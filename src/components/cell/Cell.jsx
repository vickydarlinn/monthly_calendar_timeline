import styles from "./Cell.module.css";

const Cell = ({
  height = "80px",
  width = "80px",
  title = null,
  isBold = false,
  minWidth = null,
  flexDirection = "row",
  gap = 0,
}) => {
  return (
    <div
      className={styles.wrapper}
      style={{
        height,
        width,
        fontWeight: isBold ? "bold" : "regular",
        minWidth: minWidth ? minWidth : "auto",
        flexDirection: flexDirection,
        gap: gap ? gap : "0px",
      }}
    >
      {title.length && title}
    </div>
  );
};

export default Cell;
