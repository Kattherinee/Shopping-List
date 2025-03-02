import styles from "./Note.module.css";
import editIcon from "../../assets/icons/editIcon.svg";
import deleteIcon from "../../assets/icons/trashIcon.svg";

export default function Note({ note, onEdit, onDelete, onToggle }) {
  return (
    <div className={styles.noteContainer}>
      <label className={styles.customCheckbox}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={note.status}
          onChange={() => onToggle(note.id, !note.status)}
        />
        <span className={styles.checkmark}></span>
        <span className={styles.text}>{note.text}</span>
      </label>

      <div className={styles.icons}>
        <img
          className={styles.edit}
          src={editIcon}
          alt="edit"
          onClick={onEdit}
        />
        <img
          className={styles.delete}
          src={deleteIcon}
          alt="delete"
          onClick={onDelete}
        />
      </div>
    </div>
  );
}
