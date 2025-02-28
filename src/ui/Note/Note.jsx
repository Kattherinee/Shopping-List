import styles from "./Note.module.css";
import editIcon from "../../assets/icons/editIcon.svg";
import deleteIcon from "../../assets/icons/trashIcon.svg";

export default function Note({ children, onEdit, onDelete }) {
  return (
    <div className={styles.noteContainer}>
      <label className={styles.customCheckbox}>
        <input type="checkbox" className={styles.checkbox} />
        <span className={styles.checkmark}></span>
        <span className={styles.text}>{children}</span>
      </label>

      <div className={styles.icons}>
        <img src={editIcon} alt="edit" onClick={onEdit} />
        <img src={deleteIcon} alt="delete" onClick={onDelete} />
      </div>
    </div>
  );
}
