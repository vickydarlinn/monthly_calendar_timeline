import { useState } from "react";
import style from "./Header.module.css";
import { FaLessThan, FaGreaterThan } from "react-icons/fa6";
import moment from "moment";

const Header = () => {
  const [currentDate, setCurrentDate] = useState(moment());

  const handleNextMonth = () => {
    setCurrentDate((prevDate) => prevDate.clone().add(1, "months"));
  };

  const handlePrevMonth = () => {
    setCurrentDate((prevDate) => prevDate.clone().subtract(1, "months"));
  };

  const formattedDate = currentDate.format("MMMM YYYY").toUpperCase();

  return (
    <header className={style.wrapper}>
      <div>{formattedDate}</div>
      <div className={style.btns}>
        <FaLessThan onClick={handlePrevMonth} />
        <span>Today</span>
        <FaGreaterThan onClick={handleNextMonth} />
      </div>
    </header>
  );
};

export default Header;
