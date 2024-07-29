import styles from "./Header.module.css";
import { FaLessThan, FaGreaterThan } from "react-icons/fa6";

const Header = ({ currentDate, handleNextMonth, handlePrevMonth }) => {
  const formattedDate = currentDate.format("MMMM YYYY").toUpperCase();

  return (
    <header className={styles.wrapper}>
      <div>{formattedDate}</div>
      <div className={styles.btns}>
        <FaLessThan onClick={handlePrevMonth} />
        <span>Today</span>
        <FaGreaterThan onClick={handleNextMonth} />
      </div>
    </header>
  );
};

export default Header;
