import styles from "./Select.module.css";
import { useState } from "react";
import moreIcon from "/src/assets/icons/more.svg";

function Select({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className={styles["select-container"]} onClick={handleToggle}>
      <div className={styles["custom-select"]}>
        <div className={styles["value-container"]}>
          <div className={styles["select-value"]}> {value}</div>
        </div>
        <img className={styles.imgCustom} src={moreIcon} alt="" />
      </div>
      {isOpen && (
        <div className={styles["select-options"]}>
          {options.map((option) => (
            <div key={option} onClick={() => handleSelect(option)}>
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default Select;
