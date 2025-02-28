import styles from "./AddButton.module.css";
import plus from "../../assets/icons/Add_button_plus.svg";

function AddButton({ onClick }) {
  return (
    <>
      <button className={styles.addButton} onClick={onClick}>
        <img src={plus} alt="+" />
      </button>
    </>
  );
}
export default AddButton;
